import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = [
    {
      name: 'Sistema de Geração e Leitura de QR Code',
      description: 'API para geração e leitura de QR Codes, com upload e armazenamento dos arquivos gerados na nuvem.',
      stack: ['Java', 'Spring Boot', 'Docker', 'AWS S3'],
      badge: 'Java · Spring Boot',
      link: 'https://github.com/Arthurp11'
    }
  ];
}
