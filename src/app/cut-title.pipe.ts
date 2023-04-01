import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTitle'
})
export class CutTitlePipe implements PipeTransform {

  transform(title:string,count:number=2): unknown {
    return title.split(" ").slice(0,count).join(" ").concat("..."); //سلايس لتحويل الكلام لأريه والجوين عشان أرجع الأريه لسترينج والكونكات عشان أضيف ثلاث نقاط على السترينج
  }

}
