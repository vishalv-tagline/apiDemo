import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerProductComponent } from './per-product/per-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'productlist',
    component: ProductComponent
  },
  {
    path: 'productlist/id',
    component: PerProductComponent
  },
  {
    path: '**',
    redirectTo: 'productlist'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
