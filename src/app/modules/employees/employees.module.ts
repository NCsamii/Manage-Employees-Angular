import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import {ListComponent} from "./list/list.component";
import { CreateComponent } from './create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [ListComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
