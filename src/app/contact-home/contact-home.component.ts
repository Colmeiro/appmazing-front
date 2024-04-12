import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { ContactDeleteComponent } from '../contact-delete/contact-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit{
  contacts: any = [];
  constructor(private contactsService: ContactsService,
              private router: Router,
              public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  openDetailForm(row: any) {
    this.router.navigate(['/contact', row.id]);
  }

  editContactDetail(contact: any) {
    this.router.navigate(['/contact/edit', contact]);
  }

  openDeleteDialog(contactId: number): void{
    const dialogRef = this.dialog.open(ContactDeleteComponent, { data: { contactId: contactId } });
  }
}
