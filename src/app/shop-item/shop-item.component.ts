import { Component, OnInit ,Output} from '@angular/core';
import { Router } from '@angular/router';
import {QueryService} from '../query.service';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  itemData: Array<object>;
  backUrl: string;

  constructor(private q:QueryService ) { 
    this.itemData=[];
    this.backUrl = this.q.getUrlHistoryObj();
    this.getItemData();

  }
  
  getItemData(): void{
    let path: string = this.backUrl;
    this.q.getData(path).subscribe(
      res => {
        this.itemData = res;
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
