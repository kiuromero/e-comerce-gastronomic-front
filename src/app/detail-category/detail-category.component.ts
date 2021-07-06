import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.nameCategory = this.activatedRoute.snapshot.paramMap.get('name');
    console.log(id, this.nameCategory);
    this.getProductsByCategory(id);
  }

  ngOnInit(): void {

  }

  getProductsByCategory(idCategory) {
    this.productService.getProductsByCategory(idCategory).subscribe(
      (res) => {
        console.log(res);
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
        console.log(error);
      }
    );
  }

}
