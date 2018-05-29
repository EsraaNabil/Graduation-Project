import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sec2Data: Array<object>;
  constructor(private q:QueryService) { 
    this.sec2Data=[];
  }

  getSec2Data():void{
    let path:string='./assets/homeSec2.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sec2Data=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getSec2Media():void{
    let path:string='./assets/sec2HomeMedia.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sec2Data=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  getSec2Events():void{
    let path:string='./assets/sec2HomeEvents.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sec2Data=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  ngOnInit() {
  }

}
