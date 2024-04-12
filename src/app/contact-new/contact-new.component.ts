import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})

export class ContactNewComponent implements OnInit{

  nombre!: string;
  apellido1!: string;
  apellido2!: string;
  telefono!: string;
  email!: string;

  constructor(private contactsService: ContactsService,
              private router: Router) {}

  ngOnInit() {
  }
  
  newContact() {
    const contact= {
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      telefono: this.telefono,
      email: this.email
    };
    this.contactsService.newContact(contact);
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigate(['/contacts'])
  }
  
  cancelInsert() {
    this.navigateToHome();
  }
}
