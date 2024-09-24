import { Component } from '@angular/core';
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
export class NavBarComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alterna el estado de abierto/cerrado
  }
}
