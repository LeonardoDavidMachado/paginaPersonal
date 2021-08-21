import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { MobileDetectorService } from '../../services/mobileDetector/mobile-detector.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() actual: number;
  home = false;
  formacion = false;
  experiencia = false;
  contacto = false;
  url = "";
  isMobile: boolean = false;
  isDark = true;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private mobileDetector: MobileDetectorService,) {
    this.url = this.router.routerState.snapshot.url;
    console.log("url", this.url);
    //tambien puedo definir la posicion actual usando esta variable

  }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--bodyBackground', 'darkblue');
    document.documentElement.style.setProperty('--textColor', 'white');
    document.documentElement.style.setProperty('--subtitleColor', 'chartreuse');
    document.documentElement.style.setProperty('--formacionColor', '#424242');
    document.documentElement.style.setProperty('--title', 'rgb(228, 210, 139)');
    document.documentElement.style.setProperty('--shadowColor', 'white');
    document.documentElement.style.setProperty('--iconColor', 'darkblue');
    document.documentElement.style.setProperty('--modeColor', 'yellow');
    this.isMobile = this.mobileDetector.isMobile();
    switch (this.actual) {
      case 1:
        this.home = true;
        this.formacion = false;
        this.experiencia = false;
        this.contacto = false;
        break;
      case 2:
        this.home = false;
        this.formacion = true;
        this.experiencia = false;
        this.contacto = false;
        break;
      case 3:
        this.home = false;
        this.formacion = false;
        this.experiencia = true;
        this.contacto = false;
        break;
      case 4:
        this.home = false;
        this.formacion = false;
        this.experiencia = false;
        this.contacto = true;
        break;
      default:
        this.home = false;
        this.formacion = false;
        this.experiencia = false;
        this.contacto = false;
        break;
    }
  }

  changeTheme() {
    if(this.isDark) {
      document.documentElement.style.setProperty('--bodyBackground', 'whitesmoke');
      document.documentElement.style.setProperty('--textColor', 'black');
      document.documentElement.style.setProperty('--subtitleColor', 'darkblue');
      document.documentElement.style.setProperty('--title', 'red');
      document.documentElement.style.setProperty('--formacionColor', '#7c96d9');
      document.documentElement.style.setProperty('--shadowColor', 'red');
      document.documentElement.style.setProperty('--iconColor', 'black');
      document.documentElement.style.setProperty('--modeColor', 'white');
    } else {
      document.documentElement.style.setProperty('--bodyBackground', 'darkblue');
      document.documentElement.style.setProperty('--textColor', 'white');
      document.documentElement.style.setProperty('--subtitleColor', 'chartreuse');
      document.documentElement.style.setProperty('--title', 'rgb(228, 210, 139)');
      document.documentElement.style.setProperty('--formacionColor', '#424242');
      document.documentElement.style.setProperty('--shadowColor', 'white');
      document.documentElement.style.setProperty('--iconColor', 'darkblue');
      document.documentElement.style.setProperty('--modeColor', 'yellow');
    }
    this.isDark = !this.isDark
  }

}
