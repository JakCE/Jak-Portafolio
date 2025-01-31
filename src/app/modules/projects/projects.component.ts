import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { initFlowbite } from 'flowbite';
import { IconsModule } from '../../icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  arrayDataProjects: any = [
    {
      imgSrc: './projects_img/dommies.webp',
      title: 'Dommies',
      state: 'Active',
      description: 'Dommies is a web platform that simplifies the search for compatible roommates in Lima, using a personality test and filters for location and budget. With verified profiles, it ensures a safe and efficient experience for those looking to share a home.',
      linkDemo: 'https://dommies.pro/',
      linkRepo: '/projects',
      badgets: ['Astro', 'React', 'Tailwind CSS', 'ResponsiveDesign'],
    },
    {
      imgSrc: './projects_img/Check4class.webp',
      title: 'Check4Class',
      state: 'Active',
      description: 'Check4Class is a Progressive Web App (PWA) designed to help teachers track student attendance in an academy. It allows instructors to register check-ins and check-outs per class, ensuring accurate records and seamless monitoring. The app simplifies attendance management, reducing administrative workload and improving efficiency.',
      linkDemo: 'https://check4-class.vercel.app/',
      linkRepo: 'https://github.com/JakCE/Check4Class',
      badgets: ['Angular', 'Tailwind CSS', 'Flowbite UI', 'ResponsiveDesign', 'PWA', 'Supabase'],
    },
    {
      imgSrc: './projects_img/ft_portfolio.webp',
      title: 'Portfolio',
      state: 'Active',
      description: 'Web portfolio with responsive design, enhanced accessibility, and interactive components.',
      linkDemo: 'https://jak-portafolio.vercel.app/home',
      linkRepo: 'https://github.com/JakCE/Jak-Portafolio',
      badgets: ['Angular', 'Tailwind CSS', 'Flowbite UI', 'ResponsiveDesign', 'FrontendDevelopment'],
    },
    {
      imgSrc: './projects_img/calc.webp',
      title: 'Calculator',
      state: 'Active',
      description: 'Simple web calculator with basic functions for addition, subtraction, multiplication, and division, designed with a clear and user-friendly interface.',
      linkDemo: 'https://calculator-sooty-beta.vercel.app/',
      linkRepo: 'https://github.com/JakCE/calculator',
      badgets: ['Astro', 'Tailwind CSS', 'Typescript', 'Web Development'],
    },
    {
      imgSrc: './projects_img/progress_img.webp',
      title: 'The Number One App',
      state: 'In Progress',
      description: 'I\'m developing a full-stack web application to streamline the registration and payment tracking processes for \'The Number One\' academy. The system features a user-friendly front-end for easy registration and payment management, while the back-end ensures secure and efficient data handling and processing.',
      linkDemo: '#',
      linkRepo: '#',
      badgets: ['Angular', 'Tailwind', 'Flowbite UI'],
    }
  ]
  ngOnInit(): void {
    initFlowbite();
  }
}
