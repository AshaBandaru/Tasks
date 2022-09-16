import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginRoutingModule } from './login-routing.module';
import { MainRoutingModule } from '../main/main-routing.module';



@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MainRoutingModule
  ],
  exports:[
    LoginpageComponent
  ]
})
export class LoginModule { }
