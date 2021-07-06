import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    AuthRoutingModule,
    
    //Angular Material  
    MatDialogModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [],
  exports : [LoginComponent, RegisterComponent]
})
export class AuthModule {
}
