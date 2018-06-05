import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { Observable } from 'rxjs';
import { of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]
  data:Observable<any>
  constructor() { 
    this.users = [
      {
        firstName: "Harry",
        lastName: "Singh",
        email:'harry91sgh@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:20:00'),
        hide: true
      },
      {
        firstName: "Sam",
        lastName: "Smith",
        email:'samsmith94@gmail.com',
        isActive: false,
        registered: new Date('06/02/2018 11:20:00'),
        hide: true
      }
    ];
  }
  getData(){
    this.data = new Observable(observer => {
      setTimeout( ()=>{
        observer.next(1);
      },1000);

      setTimeout( ()=>{
        observer.next(2);
      },2000)

      setTimeout( ()=>{
        observer.next(3);
      },3000)
      setTimeout( ()=>{
        observer.next(4);
      },4000)
   
    });

    return this.data;
    
  }
  getUsers():Observable<User[]>{
      return of(this.users)
  }

  addUser(User:User){
    this.users.unshift(User);
  }
}
