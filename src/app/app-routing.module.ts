import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {MenuComponent} from "./menu/menu.component";


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
