import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductNumber } from './pipe/product-number.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    ProductNumber
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    ProductNumber
  ]
})
export class SharedModule { }
