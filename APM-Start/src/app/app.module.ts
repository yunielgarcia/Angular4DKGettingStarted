import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductModule} from './products/product.module';
import {BrowserModule} from "@angular/platform-browser";
import { AppRoutingModuleModule } from './app-routing-module.module';


@NgModule({
  imports: [
    BrowserModule,//typical, every browser app should import, ngIf ...
    HttpClientModule,
    ProductModule,
    AppRoutingModuleModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
