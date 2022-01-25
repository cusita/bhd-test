import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public singIn: FormGroup;

  constructor(private formBuilder: FormBuilder, private navController: NavController, private authService: AuthService ) { }

  ngOnInit() {
    this.loginForm();
  }

  public async onSubmit(): Promise<void> {
    try {
      await this.authService.validateAuth(this.singIn.value);
      this.navController.navigateForward('/dashboard/products');
    } catch (error) {
      console.log(error);
    }
  }

  private loginForm(): void {
    this.singIn = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
