import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {QueryService} from '../query.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
cartdata: Array<object>;
  constructor(
    private q:QueryService , 
    private modalService: NgbModal
  ) { 
    this.cartdata=[];
    this.getCartData();
  }

  getCartData(): void{
    let path: string = './assets/viewCart.json';
    this.q.getData(path).subscribe(
      res => {
        this.cartdata = res;
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

