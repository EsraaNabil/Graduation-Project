//app module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//app component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
//app srvice
import {QueryService} from './query.service';
//app validator
import { EqualValidator } from '../assets/equal-validator.directive';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { PlayComponent } from './play/play.component';  // import validator

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'play' , component:PlayComponent},
  {path:'shopItem' , component:ShopItemComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    EqualValidator,
    ShopItemComponent,
    PlayComponent 
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
