import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from '../carts.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartDetailsArray:any[]=[]
  productsArray:any[]=[];
  cartName:string='';
  term:any=9;
  loading:boolean=false;
  ss:any;
 
  constructor(private _ActivatedRoute:ActivatedRoute,private _CartsService:CartsService,private _ProductService:ProductService) {}

  ngOnInit(): void{
    this.loading=true;
    const cartName = `${this._ActivatedRoute.snapshot.params["userId"]}`;
    console.log(cartName)

    this._CartsService.getUserCart(cartName).subscribe({
      next:(data)=>{
        this.cartDetailsArray=data
        console.log(this.cartDetailsArray);
        this.loading=false;
      }
    })


    this._ProductService.getAllProducts().subscribe({
      next: (data) => {
        this.productsArray = data
      }
    })
    
  }


  // ngOnDestroy():void{
  //   this.subEnd.unsubscribe();
  // }
}