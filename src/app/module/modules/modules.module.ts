import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const modules = [NgbModule, FormsModule, ReactiveFormsModule, RouterModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, modules],
  exports: [modules, CommonModule]
})
export class ModulesModule {

}
