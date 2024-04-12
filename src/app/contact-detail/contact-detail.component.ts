import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { ContactDeleteComponent } from '../contact-delete/contact-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact: any;

  constructor(private contactsService: ContactsService, 
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
            ) {}

  ngOnInit() {
      this.contact = this.contactsService.getContact(this.route.snapshot.params['id']).subscribe(data=> {
        this.contact = data;
        console.log(this)
      })
  }

  editContact() {
    this.router.navigate(['/contact/edit', this.route.snapshot.params['id']]);
  }
  
  closeContact() {
    this.router.navigate(['/contacts']);
   }

  openDeleteDialog(contactId: number): void{
    const dialogRef = this.dialog.open(ContactDeleteComponent, { data: { contactId: contactId } });
  }
}
