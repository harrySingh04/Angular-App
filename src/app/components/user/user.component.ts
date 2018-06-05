import {Component} from '@angular/core';
import {User} from '../../models/user';

@Component({
    selector:"app-user",
    templateUrl:'./user.component.html'
})

export class UserComponent{
    user:User
    
    constructor(){
        this.user={
            firstName:"Harry",
            lastName:"Singh",
            email:'',
            /*age:25,
            address:{
                street:"234 hill street",
                city:"Los Angeles",
                state:"CA"
            }*/
        }

    }
}


