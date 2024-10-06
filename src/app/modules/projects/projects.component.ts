import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  arrayDataProjects: any = [
    {
      imgSrc: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      title: 'Calculadora',
      description: 'Calculadora interactiva desarrollada con funcionalidades básicas y avanzadas, diseñada para realizar operaciones matemáticas de manera eficiente y fácil de usar.',
      linkDemo: '#',
      linkRepo: '#',
      badgets: ['Angular', 'Tailwind', 'Flowbite UI'],
    },
    {
      imgSrc: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      title: 'Portafolio',
      description: 'Portafolio moderno con contenido de calidad.',
      linkDemo: '#',
      linkRepo: '#',
      badgets: ['Angular', 'Tailwind', 'Flowbite UI'],
    }
  ]
  ngOnInit(): void {
    initFlowbite();
  }
}
