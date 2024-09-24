import { NgModule } from '@angular/core';
import { LucideAngularModule, MoveRight, Smartphone, Github, Instagram, House, Bolt, Mail, ContactRound, BriefcaseBusiness, User, Linkedin } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ 
    House,
    Bolt,
    Mail,
    ContactRound,
    User,
    BriefcaseBusiness,
    Linkedin,
    Instagram,
    Github,
    Smartphone,
    MoveRight
  })],
  exports: [LucideAngularModule],
})
export class IconsModule {}