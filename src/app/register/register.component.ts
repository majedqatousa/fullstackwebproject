import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();

  users:User[];

  user: User = new User();

  constructor(private userService:UserService) { }

  ngOnInit() {
  }


  processForm(user: User): void {
    // add a new car 

   
      //post 
      this.userService.addUsers(user).subscribe((user: User) => {
        this.update.emit(true);
      },
        error => {
          console.log(error);
          alert('cant add this user');
        }
      );
    }

}
