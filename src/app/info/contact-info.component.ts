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
    address: '1030 Old Peachtree Rd NW',
    address2: 'Lawrenceville, GA 30043',
    phone: '678-221-4404',
    hours: 'Everyday 8am - 12am'
  }

}