import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { MobileDetectorService } from '../../services/mobileDetector/mobile-detector.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() actual: number;
  home = false;
  formacion = false;
  experiencia = false;
  contacto = false;
  url = "";
  isMobile: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private mobileDetector: MobileDetectorService,) {
    this.url = this.router.routerState.snapshot.url;
    console.log("url", this.url);
    //tambien puedo definir la posicion actual usando esta variable

  }

  ngOnInit(): void {
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

}
