import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() closeModalLogin: EventEmitter<any> = new EventEmitter();
  @Output() closeModalRegister: EventEmitter<any> = new EventEmitter();
  @Output() closeModalMessage: EventEmitter<any> = new EventEmitter();

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

  register(data: any) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + '/user/create', data, { headers });
  }

  sendMessage(data: any) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + '/message-send', data, { headers });
  }
}
