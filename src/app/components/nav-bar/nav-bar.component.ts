import { Component, Input, OnInit } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [IconsModule, NgIf, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  menuOpen = false;
  @Input() mailVisible: boolean = true;

  constructor(

  ){}

  ngOnInit(): void {
    
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alterna el estado de abierto/cerrado
  }
}
