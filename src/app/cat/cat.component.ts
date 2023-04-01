import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatsService } from '../cats.service';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  categoryDetailsArray:any
  catName:string='';
  term:string='';
  loading:boolean=false;


  constructor(private _ActivatedRoute:ActivatedRoute,private _CatsService:CatsService){}

  ngOnInit(): void{
    this.loading=true;
    const catName = `${this._ActivatedRoute.snapshot.params["cat"]}`;
    this._CatsService.getCat(catName).subscribe({
      next:(data)=>{this.categoryDetailsArray=data
        this.loading=false;
      }
    })
  }
}
