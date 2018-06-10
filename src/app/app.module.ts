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
import { Sec3Component } from './sec3/sec3.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';

//app srvice
import {QueryService} from './query.service';
//app validator
import { EqualValidator } from '../assets/equal-validator.directive';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { PlayComponent } from './play/play.component';  // import validator
import { ViewCartComponent } from './view-cart/view-cart.component';  // import validator
import { ResturantsComponent } from './resturants/resturants.component';
import { SportComponent } from './sport/sport.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { TrackBabyComponent } from './track-baby/track-baby.component';
import { MediaComponent } from './media/media.component';
import { MediaAllComponent } from './media-all/media-all.component';
import { MediaBooksComponent } from './media-books/media-books.component';  // import validator
import { SchoolComponent } from './school/school.component';
import { NurseryComponent } from './nursery/nursery.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';  // import validator


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'play' , component:PlayComponent},
  {path:'shopItem/:id' , component:ShopItemComponent},
  {path:'shop', component:ShopComponent},
  {path:'mediavideos', component:MediaComponent},
  {path:'mediabooks', component:MediaBooksComponent},
  {path:'events', component:EventsComponent},
  {path:'babyTracker', component:TrackBabyComponent},
  {path:'resturants', component:ResturantsComponent},
  {path:'sport',component:SportComponent},
  {path:'schools',component:SchoolComponent},
  {path:'nursery',component:NurseryComponent},
  {path:'doctors',component:DoctorComponent},
  {path:'cart/:id',component:ViewCartComponent},
  {path:'WishList/:id',component:WishListComponent},
  {path:'contact',component:ContactComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    Sec3Component,
    LoginComponent,
    ShopComponent,
    HomeComponent,
    RegisterComponent,
    EqualValidator,
    ShopItemComponent,
    PlayComponent ,
    DoctorComponent,
    ViewCartComponent,
    ResturantsComponent,
    SportComponent,
    WishListComponent,
    TrackBabyComponent,
    MediaComponent,
    MediaAllComponent,
    MediaBooksComponent ,
    SchoolComponent,
    NurseryComponent,
    EventsComponent,
    ContactComponent 
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

