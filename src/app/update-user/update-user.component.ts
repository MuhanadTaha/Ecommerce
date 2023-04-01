import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  constructor(private _ActivatedRoute:ActivatedRoute,private _UsersService:UsersService) {}

  userDetailsArray:any
  loading: boolean = false;

updateUserForm: FormGroup = new FormGroup({
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
    this.loading=true
    const userId = +this._ActivatedRoute.snapshot.params["id"];
    // console.log(userId)

   
        
        // console.log(data);
        
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, updated it!'
        }).then((result) => {
          if (result.isConfirmed) {
            // this.UserArray = data
            // console.log(data)
            this._UsersService.updateeuser(data.value,userId).subscribe({
              next:(res)=>{
            Swal.fire(
              'Updated!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
    this.loading=false



  }

  ngOnInit(): void{
    this.loading = true;

    const userId:number = +this._ActivatedRoute.snapshot.params["id"];
    this._UsersService.getuser(userId).subscribe({
      next:(data)=>{this.userDetailsArray=data
        this.loading = false;
      }
    })
  }
}

