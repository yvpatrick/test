import { Component, OnInit } from '@angular/core';
import {PserviceService} from '../pservice.service';
import {IUser} from '../Signclass';
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})
export class NavigationComponent implements OnInit {

  constructor(private q:PserviceService,private route:Router) { }
isAdded=false;
isSigned=false;
objuser:IUser;
  ngOnInit() {
  }
// submit(myForm)
// {
//   this.q.login(myForm.value).subscribe(

//   );
// }
signup(myForm)
{
 
  this.q.signup(myForm.value).subscribe(data=>{
    this.isAdded=true;
  });


}
// signin(mForm)
// {
//   this.isAdded=false;
//   this.q.signup(mForm.value).subscribe(data=>{
//     this.isSigned=true;
//   });

// }
signin = function (mForm) {
  this.q.login(mForm.value).subscribe(k => {
    this.objuser = k['studentrecord'];
    if (this.objuser == "") {
      this.isSigned = true;
    }
    else {
      localStorage.setItem("UserRecord", JSON.stringify(this.objuser));
      this.route.navigate(['/User']);
      // this.kk="model";
    }
  },
    error => {
      this.isSigned = true;
    }
  );
}
}
