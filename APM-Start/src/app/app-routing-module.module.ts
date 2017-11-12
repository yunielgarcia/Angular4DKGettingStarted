import { NgModule } from '@angular/core';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},//for our base url, default route and view
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}//unknown urls , also use for 404 page

    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModuleModule { }
