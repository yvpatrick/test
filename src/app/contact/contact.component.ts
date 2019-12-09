import { Component, OnInit } from '@angular/core';
import {PserviceService} from '../pservice.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  isAdded=false;

  constructor(private q:PserviceService) { }

  ngOnInit() {
  }
  createUserData(myForm){
    this.q.createUserData(myForm.value).subscribe();
    this.isAdded=true;
  }
}
