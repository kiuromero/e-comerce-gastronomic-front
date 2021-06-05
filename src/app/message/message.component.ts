import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  formMessage: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formMessage = this.fb.group({
      name: ['', Validators.required],
      cellPhone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (!this.formMessage.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vacios',
        text: 'Debes completar todos los campos para poder Enviar el Mensaje',
      });
    } else {
      const dataMessage = this.formMessage.value;
      let data = {
        name: dataMessage.name,
        cell_phone: dataMessage.cellPhone,
        email: dataMessage.email,
        message: dataMessage.message
      }

      this.authService.sendMessage(data).subscribe(
        res => {
          Swal.fire({
            title: '<strong>Mensaje Enviado!</strong>',
            icon: 'success',
            html:
              'Tu Mensaje ha sido enviado con Exito, ',
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Entendido!',
          });
          setTimeout(() => {
            this.authService.closeModalMessage.emit(true);
          }, 500);
        },
        error => { }
      );
    }

  }

}
