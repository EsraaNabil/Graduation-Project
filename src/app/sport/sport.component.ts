import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  sportData: Array<object>;
  constructor(private q:QueryService) { 
    this.sportData=[];
    this.getSportData();
  }

  getSportData():void{
    let path:string='./assets/sportData.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sportData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  ngOnInit() {
  }

}
