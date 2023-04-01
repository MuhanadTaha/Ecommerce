import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _HttpClient:HttpClient) { }


  getAllCarts():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/carts");
  }


  getCart(userId:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/carts/${userId}`);
  }

  getUserCart(userId:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/carts/user/${userId}`);
  }


  deleteCart(Id:any):Observable<any>{
    return this._HttpClient.delete(`https://fakestoreapi.com/carts/${Id}`);
  }


}
