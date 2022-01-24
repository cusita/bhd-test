/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public static product;
  public dataCard = {
    productNumber: '78978933',
    productBrand: 'mastercard',
    clientName: 'katya alvear',
    productEndingDate: '17/11',
    BalanceRD: 200,
    BalanceUS: 500,
    LimitRD: 10000,
    LimitUS: 5000
  };

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  public get productDetail() {
    return ProductDetailPage.product;
  }

  public returnProducts() {
    this.navController.navigateBack('/products');
  }
}
