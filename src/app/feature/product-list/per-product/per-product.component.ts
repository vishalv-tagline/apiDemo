import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-per-product',
  templateUrl: './per-product.component.html',
  styleUrls: ['./per-product.component.scss']
})
export class PerProductComponent implements OnInit {
  public product: any;
  public id!: number;
  constructor(private activeRouter: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((response: any) => {
      if (response) {
        this.id = response.id
      }
      console.log('response', response)
    });

    // this.commonService.getProduct.find((res: any) => {
    //   if (res.id == this.id) {
    //     this.product = res
    //   }
    //   console.log('this.citieDetails', this.product)
    // });

  }

}
