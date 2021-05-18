import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { SesionStorageService } from 'src/app/core/services/sesion-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private sesionStorageService: SesionStorageService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const dataLogin = this.formLogin.value;
    let data = {
      email: dataLogin.email,
      password: dataLogin.password
    }
    this.authService.login(data).subscribe(
      res => {       
        this.sesionStorageService.setItem(SesionStorageService.CURRENT_USER, res);
        this.authService.closeModalLogin.emit(res.user);
      },
      error => { }
    );
  }
}
