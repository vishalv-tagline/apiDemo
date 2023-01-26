import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  public productData: any = []
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.patchProduct();
  }

  patchProduct() {
    this.commonService.getProduct().subscribe((response) => {
      this.productData = response
      console.log('this.productData :>> ', this.productData.products);
    })
  }
}
