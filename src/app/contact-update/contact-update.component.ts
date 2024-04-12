import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.scss']
})
export class ContactUpdateComponent implements OnInit {

  contact:any;

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router
  ){ }

  ngOnInit() {
    this.contact= this.contactsService.getContact(this.route.snapshot.params['id']).subscribe(data=>{
      this.contact= data;
    });
  }

  updateContact(): void {
    this.contactsService.updateContact(this.contact);
    this.navigateToDetail()    
  }

  cancelChanges() {
    this.navigateToDetail()
  }
  
  navigateToDetail() {
    this.router.navigate(['/contact', this.route.snapshot.params['id']]);
  }
}
