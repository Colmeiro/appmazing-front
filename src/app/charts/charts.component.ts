import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit{

  constructor(private contactsService: ContactsService){}

  initialLetter: any = [];

  ngOnInit(){
    this.contactsService.getContacts().subscribe((contacts: any[]) => {
      this.initialLetter = this.calculateInitialLettersData(contacts);
    });
  }

  calculateInitialLettersData(contacts: any[]): any[] {
    return contacts.reduce((result, contact) => {
      const initial = contact.apellido1.charAt(0).toUpperCase();
      if(result.find((item: { name: any; }) => item.name === initial)) {
        result.find((item: { name: any; }) => item.name === initial).value++;
      } else {
        result.push({name:initial, value:1});
      }
      return result;
    }, []);
  }

  formatAxisTick(value: number) {
    return Math.floor(value).toString();
  }

}
