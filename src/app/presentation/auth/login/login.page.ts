import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public singIn: FormGroup;

  constructor(private formBuilder: FormBuilder, private navController: NavController) { }

  ngOnInit() {
    this.loginForm();
  }

  public onSubmit(): void {
    console.log(this.singIn.value);
    this.navController.navigateForward('/dashboard/products');
  }

  private loginForm(): void {
    this.singIn = this.formBuilder.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
