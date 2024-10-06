import { Component, OnInit, Renderer2 } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { NgFor, NgIf } from '@angular/common';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { TypingAnimationComponent } from "../../components/typing-animation/typing-animation.component";
import { FooterPortComponent } from "../../components/footer-port/footer-port.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconsModule, NgFor, NgIf, NavBarComponent, TypingAnimationComponent, FooterPortComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  listPartsSkills: any = [
    {
      part: 1,
      title: 'Programming Languages'
    },
    {
      part: 2,
      title: 'Libraries & Frameworks'
    },
    {
      part: 3,
      title: 'Databases'
    },
    {
      part: 4,
      title: 'Tools & Platforms'
    },
  ]
  listImgSkills: any = [
    {
      skill: 'html',
      link: './ico_skills/html-1.svg',
      part: 1
    },
    {
      skill: 'css',
      link: './ico_skills/css-3.svg',
      part: 1
    },
    {
      skill: 'javascript',
      link: './ico_skills/logo-javascript.svg',
      part: 1
    },
    {
      skill: 'typescript',
      link: './ico_skills/typescript.svg',
      part: 1
    },
    {
      skill: 'python',
      link: './ico_skills/python-4.svg',
      part: 1
    },
    {
      skill: 'csharp',
      link: './ico_skills/c--4.svg',
      part: 1
    },
    {
      skill: 'c++',
      link: './ico_skills/c.svg',
      part: 1
    },
    {
      skill: 'go',
      link: './ico_skills/go-8.svg',
      part: 1
    },
    {
      skill: 'flutter',
      link: './ico_skills/flutter-logo.svg',
      part: 1
    },
    {
      skill: 'r',
      link: './ico_skills/r-lang.svg',
      part: 1
    },
    ///SECOND PART
    {
      skill: 'angular',
      link: './ico_skills/angular-icon-1.svg',
      part: 2
    },
    {
      skill: 'react',
      link: './ico_skills/react-2.svg',
      part: 2
    },
    {
      skill: 'nest',
      link: './ico_skills/nestjs.svg',
      part: 2
    },
    {
      skill: 'express',
      link: './ico_skills/express-109.svg',
      part: 2
    },
    {
      skill: 'tailwind',
      link: './ico_skills/tailwind-css-2.svg',
      part: 2
    },
    {
      skill: 'bootstrap',
      link: './ico_skills/bootstrap-5-1.svg',
      part: 2
    },
    {
      skill: 'dotnet core',
      link: './ico_skills/dot-net-core-7.svg',
      part: 2
    },
    {
      skill: 'flask',
      link: './ico_skills/flask.svg',
      part: 2
    },
    {
      skill: 'dotnet framework',
      link: './ico_skills/netframework-1.svg',
      part: 2
    },
    ///TERCERA PARTE
    {
      skill: 'mysql',
      link: './ico_skills/mysql-logo-pure.svg',
      part: 3
    },
    {
      skill: 'sql server',
      link: './ico_skills/microsoft-sql-server-1.svg',
      part: 3
    },
    {
      skill: 'mongodb',
      link: './ico_skills/mongodb-icon-2.svg',
      part: 3
    },
    ///CUARTA PARTE
    {
      skill: 'git',
      link: './ico_skills/git.svg',
      part: 4
    },
    {
      skill: 'github',
      link: './ico_skills/github-icon-1.svg',
      part: 4
    },
    {
      skill: 'gitlab',
      link: './ico_skills/gitlab-3.svg',
      part: 4
    },
    {
      skill: 'docker',
      link: './ico_skills/docker-3.svg',
      part: 4
    },
    {
      skill: 'figma',
      link: './ico_skills/figma-icon.svg',
      part: 4
    },
    {
      skill: 'vercel',
      link: './ico_skills/vercel.svg',
      part: 4
    },
    {
      skill: 'jenkins',
      link: './ico_skills/jenkins-1.svg',
      part: 4
    },
  ];

  constructor(
    private renderer: Renderer2,
  ) {
    initFlowbite();
  }

  

  ngOnInit(): void {
    initFlowbite();
    console.log(this.listImgSkills);
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.cursor-pointer a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const link = document.querySelector(`a[routerLink][fragment="${id}"]`);
          const span = link?.previousElementSibling as HTMLElement;

          if (entry.isIntersecting) {
            // Desactivar cualquier otro link antes de activar el nuevo
            navLinks.forEach((navLink) => {
              this.renderer.removeClass(navLink, 'text-orange-500');
              const spanSibling = navLink.previousElementSibling as HTMLElement;
              this.renderer.removeClass(spanSibling, 'border-orange-500');
              this.renderer.removeClass(spanSibling, 'span-active');
            });

            // Activar solo el link de la sección visible
            this.renderer.addClass(link, 'text-orange-500');
            if (span) {
              this.renderer.addClass(span, 'border-orange-500');
              this.renderer.addClass(span, 'span-active'); // Añadir tamaño extra
            }
          }
        });
      },
      {
        rootMargin: '0px 0px 0px 0px',  // Márgenes de la vista para asegurar que detecta la sección activa
        threshold: 0.5 // Detecta cuando el 50% de la sección es visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  filterSkillsPart(part: any) {
    return this.listImgSkills.filter((val:any) => val.part == part);
  }
}
