import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User; 

  constructor(private http:HttpClient) { 

  }

  getUsers():Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }
  addUsers(user: User): Observable<any>{
    return this.http.post('http://localhost:3000/users',user);
   }
}