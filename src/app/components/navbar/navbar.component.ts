import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.actual);
    console.log(this.router);
    switch(this.actual) {
      case 1:
        this.home = true;
        break;
    }
  }

}
