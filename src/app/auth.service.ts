import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  loginUser=new BehaviorSubject(null); 
  userId=new BehaviorSubject(null);


  currentUser(){
    let token = JSON.stringify(localStorage.getItem("token"));
    
    let decode:any = jwtDecode(token);
    this.userId.next(decode.sub) // بجيب اي دي اليوزر اللي داخل
    this.loginUser.next(decode); // بعرف هان انه اليوزر داخل وعامل لوج اين
    this._Router.navigate(['/home'])
    console.log(decode.sub);
  }

  login(user:any):Observable<any>{
    return this._HttpClient.post("https://fakestoreapi.com/auth/login",user)
  }
}
