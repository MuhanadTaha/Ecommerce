import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productArray: any;
  DisplayComp:boolean=true;
  loading: boolean = false;

  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService) {}


  ngOnInit(): void{
    this.loading = true;
    const productId = +this._ActivatedRoute.snapshot.params["id"];
    this._ProductService.getProduct(productId).subscribe({
      next:(data)=>{this.productArray=data
        this.loading = false;

        }
    })
 
  }


  
  deleteProd(){
    this.loading = true;

    const productId = +this._ActivatedRoute.snapshot.params["id"];

    this._ProductService.deleteProduct(productId).subscribe({
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
            this.productArray = data
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
