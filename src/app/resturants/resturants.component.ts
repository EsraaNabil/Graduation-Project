import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.scss']
})
export class ResturantsComponent implements OnInit {
  resData: Array<object>;
  constructor(private q:QueryService) {
    this.resData=[];
    this.getResData();
   }

  getResData():void{
    let path:string='./assets/resturant.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.resData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  ngOnInit() {
  }

}
