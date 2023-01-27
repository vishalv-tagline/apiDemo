import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductComponent } from './product/product.component';
import { PerProductComponent } from './per-product/per-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    PerProductComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule {
  constructor() {
    console.log('Product Module running');
  }
}
