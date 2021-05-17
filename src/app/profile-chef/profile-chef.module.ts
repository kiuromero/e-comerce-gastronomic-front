import { NgModule } from '@angular/core';
import {ProfileChefRoutingModule} from './profile-chef-routing.module'
import { LoginComponent } from '../auth/login/login.component';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';
import { ProfileChefComponent } from './profile-chef.component';
@NgModule({
  declarations: [
    ProfileChefComponent

    //Angular Material    
  ],
  entryComponents : [LoginComponent],
  imports: [    
    ProfileChefRoutingModule,
    CommonModule    
  ],
  providers: [],
  bootstrap: [],
  exports : [ProfileChefComponent]
  
})
export class ProfileChefModule { }
