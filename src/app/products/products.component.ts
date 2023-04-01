import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productArray: any[] = [];
  term: string = '';
  loading: boolean = false;
  desc: boolean = false;
  numProd:string='';

  constructor(private _ProductService: ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    this._ProductService.getAllProducts().subscribe({
      next: (data) => {
        this.productArray = data
        this.loading = false;
      }
    })
  }


  sortProduct() {
    this.desc = true;
    this.loading = true;
    this._ProductService.getAllProductsDesc().subscribe({
      next: (data) => {
        this.productArray = data
        this.loading = false;
      }
    })
  }




  onKeyupEvent(event: any){

    // alert(this.numProd)

    this.desc = true;
    this.loading = true;
    this._ProductService.limitProduct(this.numProd).subscribe({
      next: (data) => {
        this.productArray = data
        this.loading = false;
      }
    })
 
 }
}

