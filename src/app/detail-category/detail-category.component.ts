import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("hola mundo");
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
  }

}
