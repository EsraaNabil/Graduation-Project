import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  videoData: Array<object>;
  constructor(private q:QueryService) { 
    this.videoData=[];
    this.getVideoData();
  }

  getVideoData():void{
    let path:string='./assets/mediaVideos.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.videoData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }



  ngOnInit() {
  }

}
