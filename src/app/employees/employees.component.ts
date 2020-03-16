import { Component,Output, OnInit ,EventEmitter} from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();


  employees:Employee[];
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService) { 
    
  }

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
  processForm(employee: Employee): void {
      this.employeeService.addEmployee(employee).subscribe((employee: Employee) => {
        this.update.emit(true);
      },
        error => {
          console.log(error);
          alert('cant add this employee');
        }
      );
    }
}
