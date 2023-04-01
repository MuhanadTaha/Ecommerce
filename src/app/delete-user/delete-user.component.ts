import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  UserArray: any;
  DisplayComp:boolean=true;
  loading: boolean = false;

  constructor(private _ActivatedRoute:ActivatedRoute,private _UsersService:UsersService) {}


  ngOnInit(): void{
    this.loading = true;
    const userId = +this._ActivatedRoute.snapshot.params["id"];
    this._UsersService.getuser(userId).subscribe({
      next:(data)=>{this.UserArray=data
        this.loading = false;

        }
    })
 
  }


  
  deleteUse(){
    this.loading = true;

    const userId = +this._ActivatedRoute.snapshot.params["id"];

    this._UsersService.deleteuser(userId).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.UserArray = data
            console.log(data)
            this.DisplayComp=false;

            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
   
        this.loading = false;
        
      }
    })
  }
}
