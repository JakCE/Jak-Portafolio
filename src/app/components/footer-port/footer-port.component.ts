import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons.module';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-footer-port',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './footer-port.component.html',
  styleUrl: './footer-port.component.css'
})
export class FooterPortComponent implements OnInit{
  constructor(){
    initFlowbite();
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
