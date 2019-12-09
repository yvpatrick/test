import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }
Name : string;
Email : string;
Address : string;
  ngOnInit() {
    var m=JSON.parse(localStorage.getItem("UserRecord"));
    m.forEach(element =>{
      this.Name = element.Name;
      this.Email = element.Email;
      this.Address = element.Address;

    });
  }

}
