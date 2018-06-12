import { Component, OnInit, Output } from '@angular/core';
import { QueryService } from '../query.service';
import { EventEmitter } from '@angular/core';
import { DataPipeService } from '../data-pipe.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  mydata: Array<object>;

  constructor(
    private q: QueryService,
    private dataPipeService: DataPipeService
  ) {
    this.mydata = [];
    this.getCardData();
    this.q.setUrlHistoryObj("./assets/shop.json");
  }

  getCardData(): void {
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

  addItemToCart(id: number) {

  }

  ngOnInit() {

    $(document).ready(function(){
      $(".cartBtn").click(function(){
       // $(".added").css("visibility","visible");
        //$(this).parents().find(".added").css("visibility","visible");
        $(this).parents(".cardImg").find(".added").css("visibility","visible");
        // $(".cartBtn").css( 'pointer-events', 'none' );
        // $(".cartBtn").css( 'cursor', 'default' );

      });
    });


  }

}
