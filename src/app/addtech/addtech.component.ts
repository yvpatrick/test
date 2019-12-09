import { Component, OnInit } from '@angular/core';
import { PserviceService } from '../pservice.service';

@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styles: []
})
export class AddtechComponent implements OnInit {

  constructor(private q:PserviceService) { }

  ngOnInit() {
  }
  isAdded=false;
  Tech(addtech)
  {
   
    this.q.addTechData(addtech.value).subscribe(data=>{
      this.isAdded=true;
    });
  
  
  }
}
