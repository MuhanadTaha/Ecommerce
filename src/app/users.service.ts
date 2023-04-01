import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor(private _HttpClient:HttpClient) { }


  getAllUsers():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/users");
  }

  getAllUsersDesc():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/users?sort=desc");
  }

  limitUsers(id:string):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/users?limit=${id}`);
  }

  getuser(id:number):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/users/${id}`);
  }
  addUser(newUser:any):Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/users",newUser);
  }
  updateeuser(updateUse:any,id:number):Observable<any>{
    return this._HttpClient.put(`https://fakestoreapi.com/users/${id}`,updateUse);
  }
  deleteuser(id:number):Observable<any>{
    return this._HttpClient.delete(`https://fakestoreapi.com/users/${id}`);
  }
}



