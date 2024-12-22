import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: false,
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  public activeHome:string= 'active';
  public activeAbout:string= '';



  constructor(public router: Router) {
  }

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  openMenu() {
    if (this.trigger) {
      this.trigger.openMenu();
    } else {
      console.error('MatMenuTrigger is not available.');
    }
  }

  closeMenu() {
    if (this.trigger) {
      this.trigger.closeMenu();
    } else {
      console.error('MatMenuTrigger is not available.');
    }
  }

  public activePage(page:string){
    switch (page) {
      case 'home':
        this.activeHome = 'active';
        this.activeAbout = '';
        this.router.navigate(['home']);
        break
      case 'about':
        this.activeHome = '';
        this.activeAbout = 'active';
        this.router.navigate(['about']);
        break;
    }
  }

}
