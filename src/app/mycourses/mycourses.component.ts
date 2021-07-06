import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/services/product.service';
@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  products = [];

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductsByIdUser(id);
   }

  ngOnInit(): void {
  }

  getProductsByIdUser(idUser) {
    this.productService.getProductsByIdUser(idUser).subscribe(
      (res) => { console.log(res);           
        this.products = res.data.map((obj) => {
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
