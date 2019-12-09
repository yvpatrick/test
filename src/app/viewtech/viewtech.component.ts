import { Component, OnInit } from '@angular/core';
import { PserviceService } from '../pservice.service';
import {IVideo} from '../PracticeClass'
@Component({
  selector: 'app-viewtech',
  templateUrl: './viewtech.component.html',
  styles: []
})
export class ViewtechComponent implements OnInit {
allvideo:IVideo;
  constructor(private q:PserviceService) { }

  ngOnInit() {
    this.q.readTechData().subscribe(k=>{this.allvideo=k['studentrecord']});

  }

}
