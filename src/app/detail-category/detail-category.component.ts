import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../core/services/category.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {
  products = [];
  nameCategory;
  showSpinner = true;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
    private categoryService: CategoryService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.nameCategory = this.activatedRoute.snapshot.paramMap.get('name');   
    this.getProductsByCategory(id);
  }

  ngOnInit(): void {
    this.categoryService.reloadCategory.subscribe(
      res => {
        this.showSpinner = true;
        this.nameCategory = res.name;
        this.getProductsByCategory(res.id); 
      }
    );
  }

  getProductsByCategory(idCategory) {
    this.productService.getProductsByCategory(idCategory).subscribe(
      (res) => {      
        this.products = res.data.map((obj) => {
          return {
            id: obj.id_product,
            name: obj.name,
            image: obj.image,
            description: obj.description
          };
        });
        setTimeout(() => {
          this.showSpinner = false;
        }, 1000);
      },
      (error) => {       
      }
    );
  }

}
