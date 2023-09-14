import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ContactCardComponent {
  @Input() contact!: Contact;

  constructor(private router: Router) { }

  onNavigateToContactDetail(id: number) {
    this.router.navigate(['contacts', id])
  }
}
