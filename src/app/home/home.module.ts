import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { CardProductComponent } from './card-product/card-product.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { MainHomeComponent } from './main-home/main-home.component';
import {HomeRoutingModule} from './home-routing.module'
import { LoginComponent } from '../auth/login/login.component';
@NgModule({
  declarations: [
    NavBarComponent,
    SliderComponent,
    CardProductComponent,
    FooterComponent,
    MainHomeComponent,
    SectionComponent,

    //Angular Material    
  ],
  entryComponents : [LoginComponent],
  imports: [    
    HomeRoutingModule    
  ],
  providers: [],
  bootstrap: [MainHomeComponent],
  exports : [NavBarComponent, FooterComponent]
  
})
export class HomeModule { }
