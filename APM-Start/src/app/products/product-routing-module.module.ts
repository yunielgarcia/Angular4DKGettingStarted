import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductListComponent} from "./product-list.component";
import {ProductGuardService} from "./product-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuardService]},
      {path: 'products', component: ProductListComponent}]
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModuleModule { }
