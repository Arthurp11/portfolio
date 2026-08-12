import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly stats = [
    { value: '3+', label: 'anos de experiência' },
    { value: '1.500+', label: 'usuários ativos atendidos' },
    { value: '100+', label: 'entregas em produção' }
  ];
}
