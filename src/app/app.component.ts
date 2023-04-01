import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce2';
  showHeader:boolean=true;

  constructor(private _Router:Router){}

  ngOnInit(){
    this._Router.events.forEach((event)=>{// بلف على كل الايفينتس  بعد الدخول لكل صفحة
      if(event instanceof NavigationStart){//بفحض اذا كان الايفنت في كل لفة من نوع نافيجيتستار
        if(event['url']=='/login'){// في حال كان ال يو أر ال لوجين بفوت جوا الإيف
          this.showHeader=false; // في هذي الحالة بخلي هذا المتغير الموجود بالآب يتحول لفولس
        }
        else if(event['url']=='/product/addProduct'){
          this.showHeader=false; 
        }
        else{
          this.showHeader=true;
          
        }
      }
    })
  }
}
