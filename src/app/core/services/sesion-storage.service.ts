import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionStorageService {
  
  public static readonly CURRENT_USER = 'current_user';
  constructor() { }

  public setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: string) : T { 
    let _obj = sessionStorage.getItem(key);
    return <T> JSON.parse(_obj);
  }

  public removeItem(key: string): void {   
    sessionStorage.removeItem(key);
  }
}