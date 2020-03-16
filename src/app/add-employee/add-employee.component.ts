import { Component,Output, OnInit ,EventEmitter } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();


  employees:Employee[];
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }
  deleteEmployee(employeeId:number){
    this.employeeService.deleteEmployee(employeeId)
    .subscribe((employee:Employee)=>{
      this.getEmployees();
    });
  }
}
