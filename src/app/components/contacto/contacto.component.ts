import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Contacto } from '../../api/interfaces';
import { trigger, transition, animate, style} from '@angular/animations';

const CONTACTO: Contacto[] =[
  { descripcion: "Linkedin", enlace: "https://www.linkedin.com/in/leonardo-david-machado-b119681b3/", logo: "linkedin"},
  { descripcion: "Github", enlace: "https://github.com/LeonardoDavidMachado", logo: "github"},
];

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('3s')
      ]),
    ])
  ]
})
export class ContactoComponent implements OnInit {

  constructor( private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `email`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/email.svg')
    );
    }

  contactos: Contacto[];
  inView: boolean = false;

  ngOnInit(): void {
    this.contactos= CONTACTO;
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.inView = visible;
}

}
