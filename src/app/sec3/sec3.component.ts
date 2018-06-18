import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sec3',
  templateUrl: './sec3.component.html',
  styleUrls: ['./sec3.component.scss']
})
export class Sec3Component implements OnInit {

  constructor(
    private router: Router  
  ) { }

  redirectTo(): void {
    this.router.navigate(['/shop/']);
  }
  redirectToToys(): void {
    this.router.navigate(['/toys/']);
  }

  ngOnInit() {


    var distance =  $("#j").offset().top;
    
  var w = $(document).scrollTop()-250;

    $(window).scroll(function() {
      if ( w >= distance ) {
        console.log("w==" + w)
        console.log("d==" + distance)

console.log("omniaaa");
        setTimeout(function(){ 
          

          $("#scrolLeft").css("display", "block");
          $("#scrolLeft").animate({
            left: '0px',
        
        });

        $("#scrolRight").css("display", "block");
        $("#scrolRight").animate({
          right: '0px',
      
      });

        

        }, 1000);



     


}
  });
  


  }

}
