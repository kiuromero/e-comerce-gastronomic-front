import { NgModule } from '@angular/core';
import { HomeModule } from '../home/home.module';
import { DetailVideosRoutingModule } from './detail-videos-routing.module';
import { DetailVideosComponent } from './detail-videos.component';
@NgModule({
  declarations: [DetailVideosComponent
  ],  
  imports: [    
    DetailVideosRoutingModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [DetailVideosComponent],
  
})
export class DetailVideosModule { }
