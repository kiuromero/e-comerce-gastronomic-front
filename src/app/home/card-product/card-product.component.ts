import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  categories = [];
  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  ngOnInit(): void {}

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (res) => {       
        this.categories = res.data.map((obj) => {
          return {
            id: obj.id_category,
            name: obj.name,
            image: obj.image,
          };
        });        
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
