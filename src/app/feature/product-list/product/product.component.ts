import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  public productData: any = []
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.patchProduct();
  }

  patchProduct() {
    this.commonService.getProduct().subscribe((response) => {
      this.productData = response
      console.log('this.productData :>> ', this.productData.products);
    })
  }

  productDetails(id: number) {
    if (id) {
      this.router.navigate([`product/productlist/${id}`])
    }
    console.log('productId :>> ', id);
  }
}
