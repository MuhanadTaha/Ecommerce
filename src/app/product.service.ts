import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/products");
  }

  getAllProductsDesc():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/products?sort=desc");
  }

  limitProduct(id:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products?limit=${id}`);
  }


  getProduct(id:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`);
  }

  addProduct(newProduct:any):Observable<any>{
    return this._HttpClient.post("https://fakestoreapi.com/products",newProduct)
  }

  updateProduct(updateProd:any,id:any):Observable<any>{
    return this._HttpClient.put(`https://fakestoreapi.com/products/${id}`,updateProd)
  }

  

  deleteProduct(id:any):Observable<any>{
    return this._HttpClient.delete(`https://fakestoreapi.com/products/${id}`)
  }
  
}
