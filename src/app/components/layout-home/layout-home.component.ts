import { Component } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-home',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './layout-home.component.html',
  styleUrl: './layout-home.component.css'
})
export class LayoutHomeComponent {

}
