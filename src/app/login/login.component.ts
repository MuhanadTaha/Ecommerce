import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private _AuthService:AuthService, private _Router:Router){
  // window.localStorage.clear();
}

  loginForm:FormGroup = new FormGroup({
    username:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required])
  })

  faild:String='';
  
  submitForm(data:FormGroup){
    this._AuthService.login(data.value).subscribe({
      next:(res)=>{
        if(res.token){
          localStorage.setItem("token",res.token);
          this._AuthService.currentUser();
          this._Router.navigate(['/home']);
        }
      }
      ,
      error:(err)=>{
        console.log(err.status);
        this.faild=err.message;

        console.log("error is ",err)
        if(err.status==401){
          this.faild = err.error; 
        }
      }
    })
  }

}
