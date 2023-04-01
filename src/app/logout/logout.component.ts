import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {
    // window.localStorage.clear();
  }


  ngOnInit(): void {
    window.localStorage.clear();

    Promise.resolve().then(() => {
      this._AuthService.loginUser.next(null); // بخلي قيمة اللوج اين نال عشان لما بعد ما اعمل لوج أوت يرجع الناف بار مثل ما كانت قبل كا يدخل اليوزر
      this._Router.navigate(['/login'])

    })
  }
}
