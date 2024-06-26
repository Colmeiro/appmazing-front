import { Component,Inject, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.scss']
})
export class ContactDeleteComponent implements OnInit{

  contactId!: number;

  constructor(private contactsService: ContactsService,
              public dialogRef: MatDialogRef<ContactDeleteComponent>,
              @Inject(MAT_DIALOG_DATA)public data: { contactId: number},
              private router: Router) {
                this.contactId = data.contactId
              }

  ngOnInit() {
  }

  confirm(): void {
    this.contactsService.deleteContact(this.contactId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/contacts']);
  }

}
