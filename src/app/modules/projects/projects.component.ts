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
  ngOnInit(): void {
    initFlowbite();
  }
}
