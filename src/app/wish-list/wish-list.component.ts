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
  wishListData: object;
  backUrl: string;
  wishListId;
  constructor(
    private q:QueryService ,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.wishListData={};
    this.getListData();
    this.backUrl = this.q.getUrlHistoryObj();
  }

  getListData(): void{
    let path: string = this.backUrl;
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.wishListId){
            this.wishListData = element;
          }
        });
      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }

  getListData2(): void{
    let path: string = './assets/shop.json';
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.wishListId){
            this.wishListData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }


  ngOnInit() {
    console.log(this.route.params.subscribe(param=>{
      this.wishListId= param.id;
      this.getListData();
      this.getListData2();
    }))
  }

}

