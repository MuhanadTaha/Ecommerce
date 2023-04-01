import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCats():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/products/categories")
  }


  getCat(cat:string):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/category/${cat}`);

  }
}
