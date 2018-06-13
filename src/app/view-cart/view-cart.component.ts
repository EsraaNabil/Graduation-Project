import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {QueryService} from '../query.service';
import { element } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
newData: Array<object>;
cartStorage;
flag:boolean;

  constructor(
    private q:QueryService ,
    private modalService: NgbModal,
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

  ngOnInit() {
    this.getCartItems();

    $('.quantity').css('backgroundColor','red');
    $('.minus').click(function(){
      let quan= $('.quantity').html();
      // if(parseInt(quan)>1){
        $('.quantity').html('parseInt(quan)-1');
      // }
      $('.quantity').css('color','red')
      
    })



    $(document).ready(function(){

      $(".delete").click(function(){
        $(this).parent().remove();
      });

      // let x= $(".total").eq(0).html();
      // alert(x);

      let x= $(".total")
      let y=0;
      let arr=[];
      console.log("x=" + x);
      for(var i=0; i<x.length; i++){
      let z = x.eq(i).html();
      z=parseInt(z);
      arr.push(z)

      }
      alert("z=" + arr);

      let r=0;
      for(var i=0; i<arr.length; i++){
        r+=arr[i];
      // alert("r=");

      }

      alert("r="+r);


    });




  }
  

}

