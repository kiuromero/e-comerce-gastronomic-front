import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProductsByCategory(idCategory) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/product-category/' + idCategory, { headers });
  }

  getProductsById(idProduct) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/product-class/' + idProduct, { headers });
  }
}
