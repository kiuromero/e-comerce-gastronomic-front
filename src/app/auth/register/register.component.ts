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
  formRegister : FormGroup;
  constructor(private fb : FormBuilder, private authService : AuthService) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      docType : ['', Validators.required],
      numberDocument : ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(){
    const dataRegister = this.formRegister.value;
    let data = {
      doc_type : dataRegister.docType,
      number_document : dataRegister.numberDocument,
      name : dataRegister.name,
      last_name : dataRegister.lastName,
      email: dataRegister.email,
      password: dataRegister.password
    }
    console.log(data);
    this.authService.register(data).subscribe(
      res => {       
        console.log(res);
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
       
      },
      error => { }
    );
  }


}
