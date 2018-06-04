import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';
@Component({
  selector: 'app-track-baby',
  templateUrl: './track-baby.component.html',
  styleUrls: ['./track-baby.component.scss']
})
export class TrackBabyComponent implements OnInit {

  constructor() { }
  

  trackForm(drData:NgForm): void{
    console.log(drData);
    drData.reset();

  }

  ngOnInit() {
  }

}
