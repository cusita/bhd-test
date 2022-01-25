import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage/storage.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService, StorageService, AuthGuard]
})
export class CoreModule { }
