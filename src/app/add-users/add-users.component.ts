import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {


  constructor(private _UsersService: UsersService) { }

  addUserForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null),
    name:new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
    }),
    
    phone: new FormControl(null),
    address:new FormGroup({
      geolocation:new FormGroup({
        lat: new FormControl(null),
        long: new FormControl(null),
      }),
      city: new FormControl(null),
      street: new FormControl(null),
      number: new FormControl(null),
      zipcode: new FormControl(null),
    }),
   
    

  })



  submitForm(data:FormGroup){
    this._UsersService.addUser(data.value).subscribe({
      next:(res)=>{
        if(data.value.email ==null ||data.value.email == ""  || data.value.username ==null ||data.value.username ==""  || data.value.password==null || data.value.password==""){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
        else{
          console.log(data.value.email);
        
          Swal.fire(
            data.value.email,
            'You added the user',
            'success'
          )
        }
      }
    })
  }
}
