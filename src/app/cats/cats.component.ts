import { Component } from '@angular/core';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  constructor(private _CatsService:CatsService){ }
  catsArray:any[]=[];
  

  ngOnInit():void{
    this._CatsService.getAllCats().subscribe({
      next:(data)=>{this.catsArray = data}
    })
  }
}
