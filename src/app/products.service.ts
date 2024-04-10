import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const url = 'http://localhost:30030/products/getAll';
    const headers = new HttpHeaders();
    // .set('Authorization', 'Basic' + btoa('demo:demo))
    // .set('X-User', 'demo')
    // .set('X-Password', 'demo')
    return this.http.get<any>(url, { headers });
  }
}