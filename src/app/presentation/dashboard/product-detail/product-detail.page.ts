/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductModule } from '../model/product.module';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public static product: ProductModule;

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  public get productDetail(): ProductModule {
    return ProductDetailPage.product;
  }

  public returnProducts(): void {
    this.navController.navigateBack('/products');
  }
}
