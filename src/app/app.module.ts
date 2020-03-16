import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { ReportComponent } from './report/report.component';
import { CarAddComponent } from './car-add/car-add.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  {
    path:'/employee',
    component:EmployeesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarsComponent,
    ReportComponent,
    CarAddComponent,
    LoginComponent,
    RegisterComponent,
    EmployeesComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component : RegisterComponent
      },
    {
      path: 'login',
      component : LoginComponent
    },
    {
      path: 'cars',
      component : CarsComponent
    },
    {
      path: 'employee',
      component : EmployeesComponent
    },
    {
      path: 'report',
      component : ReportComponent
    }
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
