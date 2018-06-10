import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';


import {QueryService} from '../query.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
// cartdata: Array<object>;
backUrl :string;
cartData: Object;
cartId;
  constructor(
    private q:QueryService ,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    // this.cartdata=[];
    // this.getCartData();
    this.backUrl = this.q.getUrlHistoryObj();
    this.cartData={};

  }


  getCartData(): void{
    let path: string = this.backUrl;
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.cartId){
            this.cartData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }

  getCartData2(): void{
    let path: string = './assets/shop.json';
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.cartId){
            this.cartData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }

  // getCartData(): void{
  //   let path: string = './assets/viewCart.json';
  //   this.q.getData(path).subscribe(
  //     res => {
  //       this.cartdata = res;
  //       console.log(res);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }




  ngOnInit() {
    console.log(this.route.params.subscribe(param=>{
      this.cartId= param.id;
      this.getCartData();
      this.getCartData2();
    }))
  }
  

}

