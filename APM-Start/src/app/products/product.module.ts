import {NgModule} from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductGuardService} from "./product-guard.service";
import {ProductService} from "./product.service";
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModuleModule } from './product-routing-module.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModuleModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule {
}
