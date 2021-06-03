import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from '../home/home.module';
import { DetailVideosRoutingModule } from './detail-videos-routing.module';
import { DetailVideosComponent } from './detail-videos.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [DetailVideosComponent
  ],  
  imports: [    
    DetailVideosRoutingModule,
    HomeModule,
    CommonModule,
     //Swipper
     SwiperModule    
  ],
  providers: [],
  bootstrap: [DetailVideosComponent],
  
})
export class DetailVideosModule { }
