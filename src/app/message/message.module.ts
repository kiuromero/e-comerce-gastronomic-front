import { NgModule } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    MessageComponent

    //Angular Material    
  ],
  entryComponents : [LoginComponent],
  imports: [    
    MessageRoutingModule,
    CommonModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule    
  ],
  providers: [],
  bootstrap: [],
  exports : [MessageComponent]
  
})
export class MessageModule { }
