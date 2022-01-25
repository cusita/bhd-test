import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { STORAGE_KEY } from 'src/app/core/configs';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(private navController: NavController, private readonly storageService: StorageService) { }

  public returnLogin() {
    this.storageService.remove(STORAGE_KEY.token);
    this.navController.navigateBack('/');
  }

}
