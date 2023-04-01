import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  constructor(private _ActivatedRoute:ActivatedRoute,private _UsersService:UsersService) {}

  userDetailsArray:any
  loading: boolean = false;


  ngOnInit(): void{
    this.loading = true;

    const userId:number = +this._ActivatedRoute.snapshot.params["id"];
    this._UsersService.getuser(userId).subscribe({
      next:(data)=>{this.userDetailsArray=data
        this.loading = false;
      }
    })
  }
}
