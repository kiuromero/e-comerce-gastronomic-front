import { NgModule } from '@angular/core';
import {SchoolRoutingModule} from './school-routing.module'
import { LoginComponent } from '../auth/login/login.component';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
@NgModule({
  declarations: [
    SchoolComponent

    //Angular Material    
  ],
  entryComponents : [LoginComponent],
  imports: [    
    SchoolRoutingModule,
    CommonModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [],
  exports : [SchoolComponent]
  
})
export class SchoolModule { }
