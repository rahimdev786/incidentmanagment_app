import { Component } from '@angular/core';
import { ModulesModule } from '../../module/modules/modules.module';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ModulesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _apiService: ApiService, private _router: Router) { }
  loginForm = new FormGroup(({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }));


  public usernameValidation(control: string) {
    return this.loginForm.get(control)
  }

  checkLogin() {
    // let body = JSON.stringify({
    //   username: this.loginForm.controls.username.value,
    //   password: this.loginForm.controls.username.value
    // });
    // this._apiService.loginUsers(body).subscribe((val) => {
    //   console.log(val);
    // });

    if (this.loginForm.controls.username.value === this.loginForm.controls.password.value) {
      this.goToDashBoard();
    }
    console.log(this.loginForm.value)
    this.loginForm.reset();
  }

  goToDashBoard() {
    this._router.navigate(['/admin'])
  }
}
