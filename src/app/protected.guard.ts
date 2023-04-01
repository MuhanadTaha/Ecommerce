import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectedGuard implements CanActivate {
  
  constructor(private _Router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
      if(localStorage.getItem("token")!=null){ // اذا في توكين معناها ما في مشكلة ضل بالصفحة اللي انت بدك تفوت عليها 
        return true
      }else{ // اذا لا معناها حوّل على صفحة اللوج اين
        this._Router.navigate(['/login']);
        return false // ما رح تأثر ولكن مجبر عشان لازم يكون في ريتورن
      }
  }
  
}
