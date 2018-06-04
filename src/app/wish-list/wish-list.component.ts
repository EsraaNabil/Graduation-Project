import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishListData: Array<object>;
  constructor(
    private q:QueryService ,
    private modalService: NgbModal
  ) { 
    this.wishListData=[];
    this.getListData();
  }

  getListData(): void{
    let path: string = './assets/wishList.json';
    this.q.getData(path).subscribe(
      res => {
        this.wishListData = res;
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

