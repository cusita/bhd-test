/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MovementsModule } from '../model/movements.module';
import { ProductModule } from '../model/product.module';
import { ProductDetailPage } from '../product-detail/product-detail.page';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public dataCards: ProductModule[] = [
    {
      productNumber: '1234 7894 5632 1478',
      productBrand: 'mastercard',
      clientName: 'katya alvear',
      productEndingDate: '17/11',
      BalanceRD: 11111111,
      BalanceUS: 22222222,
      LimitRD: 10000,
      LimitUS: 20000
    },
    {
      productNumber: '456456',
      productBrand: 'visa',
      clientName: 'margarita alvear',
      productEndingDate: '11/09',
      BalanceRD: 11111111,
      BalanceUS: null,
      LimitRD: 10000,
      LimitUS: 20000
    }
  ];

  public dataMovements: MovementsModule[] = [
    {
      productNumber: '78978933',
      transactionType: 1,//egreso
      description: 'Pago en Tienda',
      date: '17/11/2021',
      amount: 50000
    },
    {
      productNumber: '456456',
      transactionType: 2,//Ingreso
      description: 'Pago en Nomina',
      date: '16/07/2022',
      amount: 350000
    },
    {
      productNumber: '78978933',
      transactionType: 1,//egreso
      description: 'Pago en Tienda',
      date: '17/11/2021',
      amount: 50000
    },
    {
      productNumber: '456456',
      transactionType: 2,//Ingreso
      description: 'Pago en Nomina',
      date: '16/07/2022',
      amount: 350000
    },
    {
      productNumber: '78978933',
      transactionType: 1,//egreso
      description: 'Pago en Tienda',
      date: '17/11/2021',
      amount: 50000
    },
    {
      productNumber: '456456',
      transactionType: 2,//Ingreso
      description: 'Pago en Nomina',
      date: '16/07/2022',
      amount: 350000
    }, {
      productNumber: '78978933',
      transactionType: 1,//egreso
      description: 'Pago en Tienda',
      date: '17/11/2021',
      amount: 50000
    },
    {
      productNumber: '456456',
      transactionType: 2,//Ingreso
      description: 'Pago en Nomina',
      date: '16/07/2022',
      amount: 350000
    }
  ];

  constructor(private navController: NavController, private cardsService: CardsService) { }

  ngOnInit() {
  }

  public onProductDetail(detail): void {
    ProductDetailPage.product = detail;
    this.navController.navigateForward('/product-detail');
  }

  public async getCards(): Promise<void> {
    try {
      this.dataCards = await this.cardsService.getCards();
    } catch (error) {
      console.log(error);
    }
  }
}
