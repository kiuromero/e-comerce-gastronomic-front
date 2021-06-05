import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { CardProductComponent } from './card-product/card-product.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeRoutingModule } from './home-routing.module'
import { LoginComponent } from '../auth/login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FloatButtonsComponent } from './float-buttons/float-buttons.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SliderComponent,
    CardProductComponent,
    FooterComponent,
    MainHomeComponent,
    SectionComponent,
    CarouselComponent,
    FloatButtonsComponent,

    //Angular Material    
  ],
  entryComponents : [LoginComponent],
  imports: [    
    HomeRoutingModule,
    CommonModule,
    
    //Swipper
    SwiperModule,
  ],
  providers: [],
  bootstrap: [MainHomeComponent],
  exports : [NavBarComponent, FooterComponent, SliderComponent, FloatButtonsComponent]
  
})
export class HomeModule { }
