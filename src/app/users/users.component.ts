import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent {

  usersList: any[] = [];
  term: string = '';
  loading: boolean = false;
  numUser:string='';

  constructor(private _UsersService:UsersService) { }

  ngOnInit() {
    this.loading = true;
    this._UsersService.getAllUsers().subscribe({
      next: (data) => {
        this.usersList = data;
        this.loading = false;

      }
    })
  }

  sortUsers() {
    this.loading = true;
    this._UsersService.getAllUsersDesc().subscribe({
      next: (data) => {
        this.usersList = data;
        this.loading = false;

      }
    })
  }

  onKeyupEvent(event: any){
    this.loading = true;
    this._UsersService.limitUsers(this.numUser).subscribe({
      next: (data) => {
        this.usersList = data;
        this.loading = false;

      }
    })
 }
}
