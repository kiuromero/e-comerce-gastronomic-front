import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/core/services/chef.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  chefs = [];
  constructor(private chefService : ChefService) { }

  ngOnInit(): void {
    this.getChefLists();
  }

  getChefLists() {
    this.chefService.getChefLists().subscribe(
      (res) => { console.log(res);           
        this.chefs = res.data.map((obj) => {
          return {
            id: obj.id,
            image : obj.image_chef            
          };
        });  
        console.log(this.chefs)      
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
