import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

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
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(){
    const dataRegister = this.formRegister.value;
    let data = {
      email: dataRegister.email,
      password: dataRegister.password
    }
    this.authService.register(data).subscribe(
      res => {       
        console.log(res);
      },
      error => { }
    );
  }


}
