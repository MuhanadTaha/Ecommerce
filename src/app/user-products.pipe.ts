import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userProducts'
})
export class UserProductsPipe implements PipeTransform {

  transform(list:any[],term:number): any[] {
    return list.filter((ele)=> ele.productsId == term)
  }

}
