import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm , NgModel } from '@angular/forms';
import {QueryService} from '../query.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  closeResult: string;
drdata: Array<object>;
  constructor(
    private q:QueryService , 
    private modalService: NgbModal
  ) { 
    this.drdata=[];
    this.getDrData();
  }

  getDrData(): void{
    let path: string = './assets/dr.json';
    this.q.getData(path).subscribe(
      res => {
        this.drdata = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }



    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }


    addDR(drData:NgForm): void{
      console.log(drData);
      drData.reset();

    }




  ngOnInit() {
  }

}

