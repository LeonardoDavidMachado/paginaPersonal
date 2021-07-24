import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export interface Contacto {
  descripcion: string,
  enlace: string,
  logo: string
}

const CONTACTO: Contacto[] =[
  { descripcion: "Linkedin", enlace: "https://www.linkedin.com/in/leonardo-david-machado-b119681b3/", logo: "linkedin"},
  { descripcion: "Github", enlace: "https://github.com/LeonardoDavidMachado", logo: "github"},
];

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor( private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `email`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/email.svg')
    );
    }

  contactos: Contacto[];

  ngOnInit(): void {
    this.contactos= CONTACTO;
  }

}
