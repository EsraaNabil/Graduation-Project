import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-media-all',
  templateUrl: './media-all.component.html',
  styleUrls: ['./media-all.component.scss']
})
export class MediaAllComponent implements OnInit {
  mediaData: Array<object>;

  constructor(private q:QueryService) { 
    this.mediaData=[];
  }
  getVideoData():void{
    let path:string='./assets/mediaVideos.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.mediaData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getBooksData():void{
    let path:string='./assets/mediaBooks.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.mediaData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  ngOnInit() {
  }

}
