import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router) { }

  redirectToLogin():void{
    this.router.navigate(['/login/']);
  }
  redirectToRegister():void{
    this.router.navigate(['/register/']);
  }

//   window.onscroll = function() {scrollFunction()};
//   function scrollFunction() {
//       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//           document.getElementById("myBtn").style.display = "block";
//       } else {
//           document.getElementById("myBtn").style.display = "none";
//       }
//   }
//   function topFunction() {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//   }

}

