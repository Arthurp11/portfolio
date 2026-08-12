import { Component, HostListener, signal } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly links = [
    { href: '#about', label: 'sobre' },
    { href: '#skills', label: 'stack' },
    { href: '#experience', label: 'experiência' },
    { href: '#projects', label: 'projetos' },
    { href: '#contact', label: 'contato' }
  ];

  readonly menuOpen = signal(false);
  readonly scrollProgress = signal(0);
  readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress.set(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    this.showBackToTop.set(doc.scrollTop > 600);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
