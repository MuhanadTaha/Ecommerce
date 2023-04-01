import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogin:boolean=false;
  id:any=0;
  
  constructor(private _AuthService:AuthService){}


  ngOnInit(){// كل ما يصير تغيير بفيمة اللوجين يوزر اللي موجودة بالسيرفس رح يعمل عليه متابعة هان
    this._AuthService.loginUser.subscribe({
      next:()=>{
        if(this._AuthService.loginUser.getValue()!=null){ // بجيب هذي القيمة إذا ما بتساوي نال معنا المتغير الإز لوجين بتصير ترو
          this.isLogin=true;
          this.id =this._AuthService.userId.value
        }else{
          this.isLogin=false
        }
      }
    })
  }

}
