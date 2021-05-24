import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { SesionStorageService } from 'src/app/core/services/sesion-storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  showPassword : boolean = false;
  
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
    if (!this.formLogin.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vacios',
        text: 'Debe completar todos los campos para iniciar sesión',
      });
    } else {
      const dataLogin = this.formLogin.value;
      let data = {
        email: dataLogin.email,
        password: dataLogin.password
      }
      this.authService.login(data).subscribe(
        res => { console.log(res)
          if (!res.error) {
            this.sesionStorageService.setItem(SesionStorageService.CURRENT_USER, res);
            this.authService.closeModalLogin.emit(res.user);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Usuario no Autorizado',
              text: 'Debes registrarte',
            });
          }
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Usuario no Autorizado',
            text: 'Debes registrarte',
          });
         }
      );
    }
  }

  password() {
    this.showPassword = !this.showPassword;
  }
}
