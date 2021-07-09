import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  @Output() reloadCategory: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getCategories() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/category', { headers });
  }
}
