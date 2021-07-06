import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  constructor(private http: HttpClient) { }

  getChefLists() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/chef-list', { headers });
  }

  getChefById(idChef) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/chef-detail/' + idChef, { headers });
  }
}
