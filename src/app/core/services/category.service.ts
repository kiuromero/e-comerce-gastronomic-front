import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/category', { headers });
  }
}
