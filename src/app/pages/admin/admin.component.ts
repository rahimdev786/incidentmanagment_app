import { Component, Inject, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModulesModule } from '../../module/modules/modules.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IncidententryComponent } from '../incidententry/incidententry.component';
import { ApiService } from '../../service/api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ModulesModule, MatFormFieldModule, MatInputModule, MatTableModule,
    MatSortModule, MatPaginatorModule, MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})


export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'AssignTo', 'Status', 'CreateDate',
    'CreateBy', 'ModifyDate', 'ModifyBy', 'Comment', 'Description', 'Action'];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialogue: MatDialog,
    private _api: ApiService) { }

  openModel() {
    const dialogRef = this._dialogue.open(IncidententryComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getIncidentRecords()
        }
      },
      error: console.log
    });
  }

  ngOnInit(): void {
    this.getIncidentRecords()
  }

  getIncidentRecords() {
    this._api.getIncidentRecord().subscribe((val) => {
      console.log(val);
      this.launchTable(val);
    })
  }

  launchTable(val: any) {
    this.dataSource = new MatTableDataSource(val);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEditAction(data: any) {
    const dialogRef = this._dialogue.open(IncidententryComponent, ({
      data: data
    }));
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getIncidentRecords()
        }
      },
      error: console.log
    });
  }

  deleteAction(id: number) {
    this._api.delteIncidentReord(id).subscribe(({
      next: (val) => {
        if (val) {
          this.getIncidentRecords()
        }
      },
      error: console.log
    }))
  }
}
