import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Contacto } from '../../api/interfaces';
import { trigger, transition, useAnimation} from '@angular/animations';
import { flyInOutAnimation } from '../../animations';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

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
        useAnimation(flyInOutAnimation, {
          params: {
            time: '3s'
          }
        })
      ])
    ])
  ]
})
export class ContactoComponent implements OnInit {

  constructor( 
    private dialog: MatDialog,
    private matIconRegistry: MatIconRegistry, 
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

openDialog(contacto: Contacto) {
  this.dialog.open(PopUpComponent, {
    backdropClass: 'backdropBackground',
    data: {
      contacto
    },
    height: '200px',
    width: '350px',
  });
}



}
