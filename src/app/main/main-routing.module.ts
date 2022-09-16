import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { MainsectionComponent } from './main/mainsection.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: 'contactus', component: ContactUsComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
