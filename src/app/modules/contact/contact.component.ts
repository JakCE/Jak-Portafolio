import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavBarComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
