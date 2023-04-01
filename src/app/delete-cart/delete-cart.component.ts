import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-delete-cart',
  templateUrl: './delete-cart.component.html',
  styleUrls: ['./delete-cart.component.css']
})
export class DeleteCartComponent {
  cartArray: any;
  DisplayComp:boolean=true;
  loading: boolean = false;


  constructor(private _ActivatedRoute:ActivatedRoute,private _UsersService:UsersService) {}

  ngOnInit(): void{
    this.loading = true;
    const cartId = +this._ActivatedRoute.snapshot.params["id"];
    this._UsersService.getuser(cartId).subscribe({
      next:(data)=>{this.cartArray=data
        this.loading = false;

        }
    })
 
  }


  deleteCart(){
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
            this.cartArray = data
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
