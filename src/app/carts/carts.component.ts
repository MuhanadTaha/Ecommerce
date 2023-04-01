import { Component } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {

  cartArray: any[] = [];
  term: string = '';
  loading: boolean = false;

  constructor(private _CartsService: CartsService) { }



  ngOnInit(): void {
    this.loading = true;
    this._CartsService.getAllCarts().subscribe({
      next: (data) => {
        this.cartArray = data
        console.log(this.cartArray)
        this.loading = false;
      }
    })
  }

}
