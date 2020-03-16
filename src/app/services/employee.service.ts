import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee : Employee;

  constructor(private http:HttpClient) { }

  addEmployee(employee: Employee): Observable<any>{
    return this.http.post('http://localhost:3000/employees',employee);
   }
   deleteEmployee(employeeId:number){
    return this.http.delete('http://localhost:3000/employees/'+employeeId);

  }
   getEmployees():Observable<any>{
    return this.http.get('http://localhost:3000/employees');
  }
}
