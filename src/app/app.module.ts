import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Sec3Component } from './sec3/sec3.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

import{GetServiceService} from './get-service.service';

const routes: Routes = [
  {path:'shop', component:ShopComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Sec3Component,
    LoginComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [GetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
