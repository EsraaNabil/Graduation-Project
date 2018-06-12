import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { EventEmitter } from '@angular/core';
import { DataPipeService } from '../data-pipe.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss']
})
export class ToysComponent implements OnInit {
  toysData: Array<object>;
  constructor(
    private q: QueryService,
    private dataPipeService: DataPipeService
  ) {
    this.toysData = [];
    this.getToysData();
    this.q.setUrlHistoryObj("./assets/toys.json");
   }

   getToysData(): void {
    let path: string = './assets/toys.json';
    this.q.getData(path).subscribe(
      res => {
        this.toysData = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  addItemToCart(id: number) {
    if(localStorage.getItem('cart')){
      var cart = JSON.parse(localStorage.getItem('cart'));
      if(cart.indexOf(id) == -1){
        cart.push(id);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    else{
      localStorage.setItem('cart',JSON.stringify([id]));
    }
  }

  addWishListCart(id: number) {
    if(localStorage.getItem('wishList')){
      var wishList = JSON.parse(localStorage.getItem('wishList'));
      if(wishList.indexOf(id) == -1){
        wishList.push(id);
        localStorage.setItem('wishList', JSON.stringify(wishList));
      }
    }
    else{
      localStorage.setItem('wishList',JSON.stringify([id]));
    }
  }


  ngOnInit() {
    function myFunction(e):void {
      console.log(e)
      $("#myText").eq(0).html($(e).text());  
      // document.getElementById("myText").innerHTML=e.target.innerText;
    }
  }
}
