import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId:any;
  courseId:any;
  
 
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService) {}
  productDetailsArray:any

  ngOnInit(): void{
    const productId = +this._ActivatedRoute.snapshot.params["id"];
    this._ProductService.getProduct(productId).subscribe({
      next:(data)=>{this.productDetailsArray=data
        console.log(this.productDetailsArray)}
    })
    
  }
}
