import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {QueryService} from '../query.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishListData:Array<any>;
  wishListStorage;
  flag:boolean;

  constructor(
    private q:QueryService ,
    private modalService: NgbModal,
  ) { 
    this.wishListData=[];
    this.flag=true;
  }
  
  getWishListItems(){
    if(localStorage.getItem('wishList')){
      this.wishListStorage = JSON.parse(localStorage.getItem('wishList'));
      this.q.getData('assets/shop.json').subscribe(res =>{
        res.forEach(element => {
          console.log(this.wishListStorage.indexOf(element.id));
          console.log(this.wishListStorage);
          if(this.wishListStorage.indexOf(element.id)!=-1){
            this.wishListData.push(element);
          }
        });     
        console.log("wishListdata",this.wishListData);
      });
      if(this.flag==true){
        this.q.getData('assets/toys.json').subscribe(res =>{
          res.forEach(element => {
            if(this.wishListStorage.indexOf(element.id)!=-1){
              this.wishListData.push(element);
            }
          });     
          console.log(this.wishListData);
        })
      }
    }
    else{
      this.wishListData = [];
    }
  }

  delete(itemId:number){
    if(localStorage.getItem('wishList')){
      this.wishListStorage = JSON.parse(localStorage.getItem('wishList'));
        if(this.wishListStorage.indexOf(itemId) != -1){
          this.wishListData.splice(this.wishListStorage.indexOf(itemId),1);
          this.wishListStorage.splice(this.wishListStorage.indexOf(itemId),1);
          localStorage.setItem('wishList', JSON.stringify(this.wishListStorage));
          this.flag=false;
        }
    }
  }

  ngOnInit() {
    this.getWishListItems();
  }
}