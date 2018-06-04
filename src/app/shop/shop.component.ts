import { Component, OnInit} from '@angular/core';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  mydata: Array<object>;

  constructor(
    private q:QueryService) { 
    this.mydata=[];
    this.getCardData();

  }

  getCardData(): void{
    let path: string = './assets/shop.json';
    this.q.getData(path).subscribe(
      res => {
        this.mydata = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
