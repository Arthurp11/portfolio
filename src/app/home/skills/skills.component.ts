import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly groups = [
    { title: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { title: 'Backend', items: ['Node.js', 'NestJS', 'PHP', 'Laravel', 'Java (Spring Boot)', 'Spring Data JPA', 'Hibernate'] },
    { title: 'Banco de Dados', items: ['PostgreSQL', 'Prisma ORM'] },
    { title: 'Cloud (AWS)', items: ['Lambda', 'S3', 'CloudWatch', 'Amplify'] },
    { title: 'Ferramentas & Integrações', items: ['Git', 'Docker', 'Scrum', 'Stripe', 'Blockchain'] }
  ];
}
