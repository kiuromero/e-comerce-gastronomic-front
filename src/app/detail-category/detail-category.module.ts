import { NgModule } from '@angular/core';
import { DetailCategoryComponent } from './detail-category.component';
import { DetailCategoryRoutingModule} from './detail-category-routing.module';
import { HomeModule } from '../home/home.module';
@NgModule({
  declarations: [DetailCategoryComponent
  ],  
  imports: [    
    DetailCategoryRoutingModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [DetailCategoryComponent],
  
})
export class DetailCategoryModule { }
