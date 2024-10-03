import { Component, OnInit, Renderer2 } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { NgIf } from '@angular/common';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { TypingAnimationComponent } from "../../components/typing-animation/typing-animation.component";
import { FooterPortComponent } from "../../components/footer-port/footer-port.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconsModule, NgIf, NavBarComponent, TypingAnimationComponent, FooterPortComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  constructor(
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
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
}
