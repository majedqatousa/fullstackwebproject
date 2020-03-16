import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { ReportComponent } from './report/report.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'' ,component: DashboardComponent},
  {path:'dashboard' ,component: DashboardComponent},
  {path:'cars' ,component: CarsComponent},
  {path:'report' ,component: ReportComponent},
  {path:'employee' ,component: EmployeesComponent},
  {path:'login' ,component: LoginComponent},
  {path:'register' ,component: RegisterComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
