import { Component } from "@angular/core";
import { Contact } from "../modals/contact-info";

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})

export class AppContactInfo {
  contactInfo: Contact = {
    title: 'Contact Us',
    address: '1922 Augusta St #115',
    address2: 'Greenville SC 29605',
    phone: '864-282-8892',
    hours: 'MON-THU: 10:30AM-9:30PM, FRI-SAT: 10:30AM-10:00PM'
  }

}