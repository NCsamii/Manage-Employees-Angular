import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'employee/list', pathMatch: "full"},
  {
    path: 'employee',
    loadChildren: () => import('../app/modules/employees/employees-routing.module').then(m => m.EmployeesRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
