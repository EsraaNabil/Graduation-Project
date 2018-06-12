import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { EventEmitter } from '@angular/core';
import { DataPipeService } from '../data-pipe.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss']
})
export class ToysComponent implements OnInit {
  toysData: Array<object>;
  constructor(
    private q: QueryService,
    private dataPipeService: DataPipeService
  ) {
    this.toysData = [];
    this.getToysData();
    this.q.setUrlHistoryObj("./assets/toys.json");
   }

   getToysData(): void {
    let path: string = './assets/toys.json';
    this.q.getData(path).subscribe(
      res => {
        this.toysData = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  ngOnInit() {
    function myFunction(e):void {
      console.log(e)
      // $("#myText").eq(0).html($(e).text());  
      document.getElementById("myText").innerHTML=e.target.innerText;
    }
  }
}
