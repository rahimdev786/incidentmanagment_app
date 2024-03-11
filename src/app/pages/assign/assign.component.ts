import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModulesModule } from '../../module/modules/modules.module';

@Component({
  selector: 'app-assign',
  standalone: true,
  imports: [ModulesModule, MatFormFieldModule, MatInputModule],
  templateUrl: './assign.component.html',
  styleUrl: './assign.component.css'
})
export class AssignComponent {
  constructor() { }

}
