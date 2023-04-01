import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtecteduserGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let token = JSON.stringify(localStorage.getItem("token"));
    
    // let decode:any = jwtDecode(token);
    // this.userId.next(decode.sub) // بجيب اي دي اليوزر اللي داخل
    // this.loginUser.next(decode); // بعرف هان انه اليوزر داخل وعامل لوج اين
    // this._Router.navigate(['/home'])
    // console.log(decode.sub);
    return true;
  }
  
}
