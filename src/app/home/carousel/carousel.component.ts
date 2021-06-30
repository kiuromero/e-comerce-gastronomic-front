import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChefService } from 'src/app/core/services/chef.service';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  chefs = [];
  constructor(private chefService : ChefService) { }

  ngOnInit(): void {
    this.getChefLists();
  }

  getChefLists() {
    this.chefService.getChefLists().subscribe(
      (res) => {           
        this.chefs = res.data.map((obj) => {
          return {
            id: obj.id,
            image : obj.image_chef,
            name : obj.full_name            
          };
        });  
           
      },
      (error) => {
        
      }
    );
  }
}
