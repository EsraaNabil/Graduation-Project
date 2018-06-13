import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {QueryService} from '../query.service';
import { element } from 'protractor';
import * as $ from 'jquery';
import { DataPipeService } from '../data-pipe.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
newData: Array<object>;
cartStorage;
flag:boolean;
itemId;

  constructor(
    private q:QueryService ,
    private modalService: NgbModal,
    private data: DataPipeService
  ) { 
    this.newData=[];
    this.flag=true;
  }

getCartItems(){
  if(localStorage.getItem('cart')){
    this.cartStorage = JSON.parse(localStorage.getItem('cart'));
    this.q.getData('assets/shop.json').subscribe(res =>{
      res.forEach(element => {
        console.log("data",this.newData);
        console.log(this.cartStorage.indexOf(element.id));
        console.log(this.cartStorage);
        if(this.cartStorage.indexOf(element.id)!=-1){
          this.newData.push(element);
          this.flag=false;
        }
      });
      console.log(this.newData);
    });
    if(this.flag==true){
      this.q.getData('assets/toys.json').subscribe(res =>{
        res.forEach(element => {
          if(this.cartStorage.indexOf(element.id)!=-1){
            this.newData.push(element);
          }
        });     
        console.log(this.newData);
      })
    }
  }
  else{
    this.newData = [];
  }
}

delete(itemId:number){
  if(localStorage.getItem('cart')){
    this.cartStorage = JSON.parse(localStorage.getItem('cart'));
      if(this.cartStorage.indexOf(itemId) != -1){
        this.newData.splice(this.cartStorage.indexOf(itemId),1);
        this.cartStorage.splice(this.cartStorage.indexOf(itemId),1);
        localStorage.setItem('cart', JSON.stringify(this.cartStorage));
        this.flag=false;
      }
  }
  this.newMessage();
}

newMessage() {
  this.data.changeMessage(JSON.parse(localStorage.getItem('cart')).length)
}
  ngOnInit() {
    this.getCartItems();
    $(document).ready(function(){
      $('.minus').click(function(){
        let quan=$(this).parent("ul").find(".quantity").html();
        if(parseInt(quan)>1){
          $(this).parent("ul").find(".quantity").html(parseInt(quan)-1);
        }        
      })
      $('.plus').click(function(){
        let quan=$(this).parent("ul").find(".quantity").html();
        $(this).parent("ul").find(".quantity").html(parseInt(quan)+1);
      })
    });
  }
}

