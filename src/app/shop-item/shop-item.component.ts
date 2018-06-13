import { Component, OnInit ,Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {QueryService} from '../query.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  itemData: Object;
  backUrl: string;
  itemId;

  constructor(
    private q:QueryService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  { 
    this.itemData={};
    this.backUrl = this.q.getUrlHistoryObj();
  }
  
  getItemData(): void{
    let path: string = this.backUrl;
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.itemId){
            this.itemData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }

  getItemData2(): void{
    let path: string = './assets/shop.json';
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.itemId){
            this.itemData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }
  getItemData3(): void{
    let path: string = './assets/toys.json';
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.itemId){
            this.itemData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }

  

  ngOnInit() {
    console.log(this.route.params.subscribe(param=>{
      this.itemId= param.id;
      this.getItemData();
      this.getItemData2();
      this.getItemData3();
      $(document).ready(function(){
        $('.minus').click(function(){
          let quan= $('.quantity').html();
          if(parseInt(quan)>1){
            $(this).parent("ul").find(".quantity").html(parseInt(quan)-1);
          }        
        })
        $('.plus').click(function(){
          let quan= $('.quantity').html();
          $(this).parent("ul").find(".quantity").html(parseInt(quan)+1);
        })
      });
    }))
  }
  

}
