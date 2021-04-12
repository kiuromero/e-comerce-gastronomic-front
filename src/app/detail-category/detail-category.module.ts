import { NgModule } from '@angular/core';
import { DetailCategoryComponent } from './detail-category.component';
import { DetailCategoryRoutingModule} from './detail-category-routing.module';
import { HomeModule } from '../home/home.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [DetailCategoryComponent
  ],  
  imports: [    
    DetailCategoryRoutingModule,
    HomeModule,
    CommonModule    
  ],
  providers: [],
  bootstrap: [DetailCategoryComponent],
  
})
export class DetailCategoryModule { }
