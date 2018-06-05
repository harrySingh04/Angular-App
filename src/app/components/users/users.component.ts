import { Component, OnInit ,ViewChild} from '@angular/core';
import { User } from '../../models/user'
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  User: User = {
    firstName: '',
    lastName: '',
    email:'',
    //age: null,
    /*address: {
      street: '',
      city: '',
      state: ''
    }*/
  }
  users: User[]
  show: boolean
  enabled: boolean = false
  enableAdd: boolean = false
  showExtended: boolean = true
  showUserForm: boolean = false
  loaded:boolean = false;
  data:any;

  @ViewChild('userForm')form:any
  //currentClasses = {}
  //currentStyles = {}
  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getData().subscribe(data =>{
      console.log(data);
    });
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      this.loaded = true;
    });
    /*this.users = [
      {
        firstName: "Harry",
        lastName: "Singh",
        /*age: 25,
        address: {
          street: "234 hill street",
          city: "Los Angeles",
          state: "CA"
        }
        email:'harry91sgh@gmail.com',
        // image:"http://lorempixel.com/600/600/people/3",
        isActive: true,
        //balance:100,
        registered: new Date('01/02/2018 08:20:00'),
        hide: true
      },
      {
        firstName: "Sam",
        lastName: "Smith",
        /*age: 21,
        address: {
          street: "234 hull street",
          city: "San Diego",
          state: "CA"
        }
        email:'samsmith94@gmail.com',
        // image:"http://lorempixel.com/600/600/people/2",
        isActive: false,
        //balance:500,
        registered: new Date('06/02/2018 11:20:00'),
        hide: true
      }



    ];*/
    //this.setCurrentClasses();
    //this.setCurrentStyles();
  }

  /*addUser() {
    
    this.User.isActive = true
    this.User.registered = new Date()
    this.users.unshift(this.User);// It will add in the starting of the list,same as push which adds in end
    
    this.User = {
      firstName: '',
      lastName: '',
      email:'',
      /*age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }*/
  /*setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text' : true
    }
  }
  setCurrentStyles(){
    this.currentStyles = {
      'padding-top': this.enableAdd ? '0':'40px'
    }
  }*/
  /*toggleHide(User:User){
     User.hide = !User.hide;
  }*/

  onSubmit({value,valid}:{value:User,valid:boolean}){
   
    if(!valid){
console.log('Form is not valid')
    }
    else{
      value.isActive = true
      value.registered = new Date()
      value.hide = true
     // this.users.unshift(value)
     this.userService.addUser(value);

      this.form.reset()
    }
  }
}
