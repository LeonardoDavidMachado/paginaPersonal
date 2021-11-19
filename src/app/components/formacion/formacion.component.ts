import { Component, OnInit } from '@angular/core';
import { Formacion } from '../../api/interfaces';
import { MobileDetectorService } from '../../services/mobileDetector/mobile-detector.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

const FORMACION: Formacion[] = [
  { posicion: 1, nombre: 'INGENIERIA EN SISTEMAS', establecimiento: 'UTN FRBA', fechaInicio: '2021', fechaFin: '', logo: 'UTNFRBA.png', },
  { posicion: 2, nombre: 'DIPLOMATURA EN PROGRAMACION WEB FULL STACK CON REACT JS', establecimiento: 'CENTRO DE E-LEARNING UTN FRBA', fechaInicio: '2020', fechaFin: '2021', logo: 'elearning.png', },
  { posicion: 3, nombre: 'PROGRAMACION JAVA', establecimiento: 'ITMaster Academy', fechaInicio: '2020', fechaFin: '2020', logo: 'itmaster.svg', },
  { posicion: 4, nombre: 'INGENIERA ELECTRONICA', establecimiento: 'UTN FRH', fechaInicio: '2015', fechaFin: '', logo: 'UTN-FRH.png', },
];



@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class FormacionComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'establecimiento', 'logo', 'fechaInicio', 'fechaFin'];
  dataSource = FORMACION;
  lenguajes = ["C", "C++", "Java", "JavaScript", "TypeScript", "Phyton"];
  basesDeDatos = ["MySQL", "MongoDB"];
  frameTec = ["Node.js", "Express", "React", "React Native", "Angular", "Material", "Ionic", "Cordova", "Selenium", "Docker"];
  position= 0;
  isMobile: boolean = false;
  constructor(
    private mobileDetector: MobileDetectorService,
  ) { }

  ngOnInit(): void {
    this.isMobile = this.mobileDetector.isMobile();
  }

  change(destiny: number): number {
    const BACK = 0;
    const FORWARD = 1;
    const LENGTH = 2;
    switch(destiny) {
      case BACK: {
        if(this.position>0) {
          this.position--;
        } else {
          this.position = 0;
        }
        break;
      }
      case FORWARD: {
        if(this.position<LENGTH) {
          this.position++;
        } else {
          this.position= 2;
        }
        break;
      }
    }
    return this.position;
  }

}