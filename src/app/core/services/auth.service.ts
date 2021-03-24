import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, ) { }

  login(data: any){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + '/auth/login', data, {headers});
  }

  /* getToken(data?) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + '/login/login-user', obj, { headers });
  } */
}
