import { Component, Input, OnInit } from '@angular/core';
import { MobileDetectorService } from '../../services/mobileDetector/mobile-detector.service';
import { ThemeChangerService } from '../../services/themeChanger/theme-changer.service';

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
  isMobile: boolean = false;
  isDark = true;

  constructor(
    private mobileDetector: MobileDetectorService,
    private themeChanger: ThemeChangerService) {
  }

  ngOnInit(): void {
    this.themeChanger.darkTheme();
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
    this.isDark = this.themeChanger.changeTheme();
  }

}
