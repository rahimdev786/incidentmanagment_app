import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, FormGroup } from '@angular/forms';
import { ModulesModule } from '../../module/modules/modules.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../service/api.service';
import { IncidentCreation } from '../../models/incidentmodel';



@Component({
  selector: 'app-incidententry',
  standalone: true,
  imports: [ModulesModule, MatFormFieldModule, MatInputModule, MatIconModule, MatRadioModule, MatSelectModule, MatDatepickerModule],
  templateUrl: './incidententry.component.html',
  styleUrl: './incidententry.component.css'
})
export class IncidententryComponent implements OnInit {
  currentDate: Date = new Date();
  createdToIncident: Food[] = [
    { comapany: 'almullah', campnaycode: 'mullah001' },
    { comapany: 'bhrain exchange', campnaycode: 'exchnage01' },
    { comapany: 'muzaini', campnaycode: 'muzaini3' },
    { comapany: 'alhnamin', campnaycode: 'alghanim4' }
  ];

  constructor(public _dialouge: MatDialogRef<IncidententryComponent>,
    private _api: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    this.incidentEntryForm.patchValue(this.data);
  }

  incidentEntryForm = new FormGroup({
    incidentName: new FormControl(''),
    incidentAssignTo: new FormControl(''),
    incidentDescription: new FormControl('')
  })

  submitForm() {
    this.postIncidentEntry();
  }

  postIncidentEntry() {
    if (this.incidentEntryForm.valid) {
      if (this.data) { //edit

        console.log(this.data.id)
        console.log(this.data.values)
        console.log(this.incidentEntryForm.value)

        let body: IncidentCreation = {
          incidentName: this.incidentEntryForm.value.incidentName ?? '',
          incidentAssignTo: this.incidentEntryForm.value.incidentAssignTo ?? '',
          incidentStatus: this.data.incidentStatus,
          incidentCreateDate: this.data.incidentCreateDate,
          incidentCreateBy: this.data.incidentCreateBy,
          incidentDescription: this.incidentEntryForm.value.incidentDescription ?? '',
          incidentModifyDate: this.data.incidentModifyDate,
          incidentModifyBy: this.data.incidentModifyBy,
          incidentComment: this.data.incidentComment
        }

        console.log(body)
        this._api.editIncidentReord(this.data.id, body).subscribe({
          next: (val) => {
            this._dialouge.close(true);
            this.resetForm();
          },
          error: console.log
        });

      } else {

        let body: IncidentCreation = {
          incidentName: this.incidentEntryForm.value.incidentName ?? '',
          incidentAssignTo: this.incidentEntryForm.value.incidentAssignTo ?? '',
          incidentStatus: "open",
          incidentCreateDate: this.currentDate.toLocaleDateString(),
          incidentCreateBy: "admin",
          incidentDescription: this.incidentEntryForm.value.incidentDescription ?? '',
          incidentModifyDate: '',
          incidentModifyBy: '',
          incidentComment: ''
        }

        this._api.postIncidentEntry(body).subscribe({
          next: (val) => {
            this._dialouge.close(true);
            console.log(this.incidentEntryForm.value);
            this.resetForm();
          },
          error: console.log
        });
      }
    }
  }

  resetForm() {
    this.incidentEntryForm.reset()
  }
}

export interface Food {
  comapany: string;
  campnaycode: string;
}

