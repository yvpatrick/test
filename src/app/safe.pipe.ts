import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
constructor(private q:DomSanitizer){}

  transform(Video: any, ) {

    return this.q.bypassSecurityTrustResourceUrl(Video);
  }

}
