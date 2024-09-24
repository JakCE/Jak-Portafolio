import { Component } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [IconsModule, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alterna el estado de abierto/cerrado
  }
}
