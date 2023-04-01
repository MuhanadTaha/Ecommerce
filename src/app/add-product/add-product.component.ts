import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  title:string=''
  price:string=''
  description:string=''
  image:string=''
  category:string=''




  constructor(private _ProductService: ProductService) { }



  addProductForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    price: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(10000)]),
    description: new FormControl(null,[Validators.required]),
    image: new FormControl('https://i.pravatar.cc'),
    category: new FormControl(null,[Validators.required]),

  })




  submitForm(data:FormGroup){

    if(data.value.title != '' && data.value.price != '' && data.value.description != '' && data.value.category != ''){
      this._ProductService.addProduct(data.value).subscribe({
        next:(res)=>{
          console.log(res);
          
          Swal.fire(
            res.title+": "+res.description,
            'You add the product!',
            'success'
          )
        
        }
      })
    }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    }
   



}
