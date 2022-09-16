import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MainsectionComponent } from './mainsection/mainsection.component';
import { MainRoutingModule } from './main-routing.module';
import { LoginRoutingModule } from '../login/login-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainsectionComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LoginRoutingModule
  ],
  exports:[
    HeaderComponent,
    MainsectionComponent
  ]
})
export class MainModule { }
