import { NgModule } from '@angular/core';
import {MyCoursesRoutingModule} from './mycourses-routing.module'
import { LoginComponent } from '../auth/login/login.component';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './mycourses.component';
@NgModule({
  declarations: [
    MyCoursesComponent

    //Angular Material    
  ],
  entryComponents : [LoginComponent],
  imports: [    
    MyCoursesRoutingModule,
    CommonModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [],
  exports : [MyCoursesComponent]
  
})
export class MyCoursesModule { }
