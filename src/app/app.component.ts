import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { DataPipeService } from './data-pipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardItemsQuantities: number;
  WishListItemsQuantities:number;
  constructor(
    private router: Router,
    private dataPipeService: DataPipeService
  ) {
    this.dataPipeService.getCartItemsQuantity().subscribe(quantity => {
      if (!quantity || quantity === 0) {
        this.cardItemsQuantities = window.localStorage.getItem('cart') ? window.localStorage.getItem('cart').split(',').length : 0;
        this.WishListItemsQuantities = window.localStorage.getItem('wishList') ? window.localStorage.getItem('wishList').split(',').length : 0;
      } else {
        this.cardItemsQuantities = quantity;
        this.WishListItemsQuantities = quantity;
      }
    });
  }

  redirectToLogin(): void {
    this.router.navigate(['/login/']);
  }

  redirectToRegister(): void {
    this.router.navigate(['/register/']);
  }


}
