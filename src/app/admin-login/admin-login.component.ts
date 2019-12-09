import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styles: []
})
export class AdminLoginComponent implements OnInit {
isAdded=false;

  constructor(private route: Router) { }

  ngOnInit() {
  }
LoginAdmin(myForm)
{
if(myForm.Email=='admin' && myForm.Password == 'admin')
{
  this.route.navigate(['/AdminHome']);
}
else
{
  this.isAdded=true;
}
}
}
