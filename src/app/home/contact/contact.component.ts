import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly year = new Date().getFullYear();

  readonly links = [
    { label: 'email', value: 'arthurp1190@gmail.com', href: 'mailto:arthurp1190@gmail.com' },
    { label: 'github', value: 'github.com/Arthurp11', href: 'https://github.com/Arthurp11' },
    { label: 'linkedin', value: 'linkedin.com/in/arthur-primo', href: 'https://linkedin.com/in/arthur-primo' },
    { label: 'telefone', value: '(53) 99902-5022', href: 'tel:+5553999025022' }
  ];
}
