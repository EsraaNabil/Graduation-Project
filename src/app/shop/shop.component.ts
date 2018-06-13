import { Component, OnInit, Output } from '@angular/core';
import { QueryService } from '../query.service';
import { EventEmitter } from '@angular/core';
import { DataPipeService } from '../data-pipe.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  mydata: Array<object>;

  constructor(
    private q: QueryService,
    private data: DataPipeService
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
    this.newMessage();
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
  newMessage() {
    this.data.changeMessage(JSON.parse(localStorage.getItem('cart')).length)
  }
  ngOnInit() {
  }

}
