import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact: any;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.contact = this.contactsService.getContact(this.route.snapshot.params['id']).subscribe(data=> {
        this.contact = data;
      })
  }
}
