import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from '../core/services/chef.service';

@Component({
  selector: 'app-profile-chef',
  templateUrl: './profile-chef.component.html',
  styleUrls: ['./profile-chef.component.scss']
})
export class ProfileChefComponent implements OnInit {
  chefs = [];
  profileChef : any= [];
  constructor(private chefService : ChefService, private activatedRoute : ActivatedRoute) { 
    let id = this.activatedRoute.snapshot.paramMap.get('id');  
    console.log(id);
    this.getChefById(id);
  
  }

  ngOnInit(): void {
  }

  getChefById(idChef) {
    this.chefService.getChefById(idChef).subscribe(
      (res) => {
      this.profileChef.name = res.data[0].full_name;
      this.profileChef.description = res.data[0].description_experience;
      this.profileChef.profession = res.data[0].profession;
      this.profileChef.image = res.data[0].image_chef;

        this.chefs = res.data.map((obj) => {
          return {
            id: obj.id_product,
            name: obj.name,
            image: obj.image,
            description : obj.description
          };
        });        
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
