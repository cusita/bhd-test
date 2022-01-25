import { ROUTES } from './../configs/routes.config';
import { Injectable } from '@angular/core';
import {
  CanActivate
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { STORAGE_KEY } from '../configs';
import { StorageService } from '../services/storage/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private navController: NavController) {}

  canActivate() {
    if (this.storageService.get(STORAGE_KEY.token)) {
      return true;
    }

    this.navController.navigateForward(`/${ROUTES.auth}/${ROUTES.login}`);

    return false;
  }
}
