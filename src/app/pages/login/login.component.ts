import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../default-login-layout/default-login-layout.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormGroup('', [Validators.required, Validators.email]),
      password: new FormGroup('', [Validators.required, Validators.minLength(6)])
    })
  }
}
