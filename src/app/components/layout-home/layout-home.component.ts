import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-layout-home',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './layout-home.component.html',
  styleUrl: './layout-home.component.css'
})
export class LayoutHomeComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}
