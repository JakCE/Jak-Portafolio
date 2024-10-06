import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { LayoutHomeComponent } from "../../components/layout-home/layout-home.component";
import { FooterPortComponent } from "../../components/footer-port/footer-port.component";
import { AboutComponent } from "../about/about.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, LayoutHomeComponent, FooterPortComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}
