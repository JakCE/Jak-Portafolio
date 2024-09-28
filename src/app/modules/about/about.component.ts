import { Component } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { NgIf } from '@angular/common';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { TypingAnimationComponent } from "../../components/typing-animation/typing-animation.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconsModule, NgIf, NavBarComponent, TypingAnimationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
}
