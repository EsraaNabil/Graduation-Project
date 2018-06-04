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

  constructor(private q:QueryService ) { 
    this.itemData=[];
  }
  

  getItemData():void{
    let path:string='./assets/shopItem1.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.itemData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  

  }
  

  ngOnInit() {
  }
  

}
