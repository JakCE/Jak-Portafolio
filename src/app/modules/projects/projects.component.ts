import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { initFlowbite } from 'flowbite';
import { IconsModule } from '../../icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavBarComponent, IconsModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  arrayDataProjects: any = [
    {
      imgSrc: './projects_img/ft_portfolio.png',
      title: 'Portfolio',
      description: 'Web portfolio with responsive design, enhanced accessibility, and interactive components.',
      linkDemo: 'https://jak-portafolio.vercel.app/home',
      linkRepo: 'https://github.com/JakCE/Jak-Portafolio',
      badgets: ['Angular', 'TailwindCSS', 'Flowbite UI', 'ResponsiveDesign', 'FrontendDevelopment'],
    },
    {
      imgSrc: './projects_img/progress_img.jpg',
      title: 'The Number One App',
      description: 'I\'m developing a full-stack web application to streamline the registration and payment tracking processes for \'The Number One\' academy. The system features a user-friendly front-end for easy registration and payment management, while the back-end ensures secure and efficient data handling and processing.',
      linkDemo: '#',
      linkRepo: '#',
      badgets: ['Angular', 'Tailwind', 'Flowbite UI'],
    },
    {
      imgSrc: './projects_img/progress_img.jpg',
      title: 'Calculator',
      description: 'Simple web calculator with basic functions for addition, subtraction, multiplication, and division, designed with a clear and user-friendly interface.',
      linkDemo: '#',
      linkRepo: '#',
      badgets: ['Angular', 'Tailwind', 'Flowbite UI'],
    }
  ]
  ngOnInit(): void {
    initFlowbite();
  }
}
