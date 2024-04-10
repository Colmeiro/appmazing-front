import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    const url = 'http://localhost:30030/contactos/getAll';
    const headers = new HttpHeaders();
    // .set('Authorization', 'Basic' + btoa('demo:demo))
    // .set('X-User', 'demo')
    // .set('X-Password', 'demo')
    return this.http.get<any>(url, { headers });
  }
}

