import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly roles = [
    {
      role: 'Desenvolvedor Full Stack',
      company: 'Acanto',
      period: '02/2026 – Atual',
      bullets: [
        'Arquitetou e implementou APIs REST em NestJS, Prisma e PostgreSQL para as plataformas Mais Plantões e ContabMed, atendendo mais de 1.500 usuários ativos.',
        'Otimizou queries críticas no Prisma/PostgreSQL, eliminando gargalos de performance em produção, e colaborou na integração do Stripe.',
        'Estruturou pipeline de deploy serverless em AWS Lambda com S3, CloudWatch e Amplify.',
        'Entregou mais de 40 itens entre funcionalidades, design e correções de bugs em equipe de 3 desenvolvedores.'
      ]
    },
    {
      role: 'Estagiário em Desenvolvimento',
      company: 'Acanto',
      period: '02/2025 – 02/2026',
      bullets: [
        'Atuou no full stack (Angular + NestJS), contribuindo com modelagem de banco de dados e otimização de queries críticas.',
        'Colaborou em equipe multidisciplinar de 3 desenvolvedores — promovido a Desenvolvedor Full Stack após 1 ano.'
      ]
    },
    {
      role: 'Estagiário em Desenvolvimento',
      company: 'Instituto Sigales',
      period: '01/2025 – 07/2025',
      bullets: [
        'Integrou individualmente o Stripe à plataforma Agrobrand em Laravel, automatizando 100% do processo de cobrança.',
        'Contribuiu para integração de funcionalidades blockchain, entregando 15 novas features e correções de bugs.',
        'Atuou como um dos primeiros desenvolvedores do produto, em fase pré-lançamento.'
      ]
    },
    {
      role: 'Estagiário em Desenvolvimento',
      company: 'COINPEL',
      period: '10/2022 – 10/2024',
      bullets: [
        'Implementou o framework Laravel do zero em sistemas internos da administração pública municipal.',
        'Desenvolveu e manteve funcionalidades em Laravel e PHP puro, no backend e frontend.'
      ]
    }
  ];
}
