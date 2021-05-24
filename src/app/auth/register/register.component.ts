import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  showPassword: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      docType: ['', Validators.required],
      numberDocument: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (!this.formRegister.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vacios',
        text: 'Debes completar todos los campos para poder Registrarte',
      });
    } else {
      const dataRegister = this.formRegister.value;
      let data = {
        doc_type: dataRegister.docType,
        number_document: dataRegister.numberDocument,
        name: dataRegister.name,
        last_name: dataRegister.lastName,
        email: dataRegister.email,
        password: dataRegister.password
      }
      console.log(data);
      this.authService.register(data).subscribe(
        res => {
          if (res.error) {
            Swal.fire({
              icon: 'error',
              title: 'Duplicado',
              text: 'Este Email ya está en uso. Intenta nuevamente con otro Email.',
            });
          } else {
            Swal.fire({
              title: '<strong>Registro Exitoso!</strong>',
              icon: 'success',
              html:
                'Tu Registro ha sido completado con Exito, ' +
                'Ahora debes <b> INICIAR SESION para continuar </b>',
              confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Entendido!',
            });
            setTimeout(() => {
              this.authService.closeModalRegister.emit(true);
            }, 500);
          }
        },
        error => { }
      );
    }
  }

  password() {
    this.showPassword = !this.showPassword;
  }

}
