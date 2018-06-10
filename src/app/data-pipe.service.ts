import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPipeService {
  cartItemsQuantity: BehaviorSubject<number> = new BehaviorSubject(0); 
  
  setCartItemsQuantity(quantity: number): void {
    this.cartItemsQuantity.next(quantity);
  }

  getCartItemsQuantity(): Observable<any> {
    return this.cartItemsQuantity;
  }

}
