import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productId:any;
  courseId:any;
  productArray: any;
  test:any;
 


  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService) {}


  ngOnInit(): void{
    const productId = +this._ActivatedRoute.snapshot.params["id"];
    this._ProductService.getProduct(productId).subscribe({
      next:(data)=>{this.productArray=data
        console.log(this.productArray)}
    })
 
  }




  updateProductForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    price: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(10000)]),
    description: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
  })


  submitForm(data:FormGroup){
    const productId = +this._ActivatedRoute.snapshot.params["id"];

    this._ProductService.updateProduct(data.value,productId).subscribe({
      next:(res)=>{
        console.log(res);
        Swal.fire(
          "Product Id: "+res.id ,
          'You Updated product',
          'success'
        )
      }
    })
  }





}
