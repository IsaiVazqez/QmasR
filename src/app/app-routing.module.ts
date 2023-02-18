import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, },
  { path: 'login', component: LoginComponent, },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
