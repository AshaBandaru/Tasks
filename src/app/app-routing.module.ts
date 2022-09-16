import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './login/loginpage/loginpage.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  // {
  //   path: 'main', component: MainsectionComponent,
  //   children: [
  //     { path: 'home', component: HomeComponent },
  //     { path: 'aboutus', component: AboutUsComponent },
  //     { path: 'contactus', component: ContactUsComponent },
  //   ]
  // },
  // {
  //   path: 'main', component: HeaderComponent

  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
