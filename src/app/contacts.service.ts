import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
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

  getContact(c_id: number): Observable<any> {
    const url = 'http://localhost:30030/contactos/get';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    const body = JSON.stringify({id:c_id})
    return this.http.post(url, body, { headers });
  }

  updateContact(contact: any):void {
    const url = 'http://localhost:30030/contactos/update';
    const body = contact;
    const headers = new HttpHeaders()
    this.http.put(url, body, {headers}).subscribe();
  }

  newContact(contact: any): void {
    const url = "http://localhost:30030/contactos/add";
    const body = contact;
    const headers = new HttpHeaders();
    this.http.post(url, body, {headers}).subscribe();
  }

  deleteContact(id: number): void {
    const url = "http://localhost:30030/contactos/delete";
    const body = {id : id};
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
  }
}

