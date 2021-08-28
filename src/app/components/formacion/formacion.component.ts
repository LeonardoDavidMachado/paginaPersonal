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
    trigger('slideStatus', [
      state('inactive', style({ backgroundColor: 'darkblue' })),
      state('active', style({ backgroundColor: 'black' })),

      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'darkblue', offset: 0}),
          style({ backgroundColor: '#8823cc', offset: 0.8}),
          style({ backgroundColor: 'black', offset: 1.0})
        ])),
      ]),
      transition('* => inactive', [
        animate('2s', keyframes([
          style({ backgroundColor: 'black', offset: 0}),
          style({ backgroundColor: '#8823cc', offset: 0.2}),
          style({ backgroundColor: 'darkblue', offset: 1.0})
        ]))
      ]),

      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'black' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'darkblue' })
        ]))
      ]),
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
  status: 'active' | 'inactive' = 'inactive';
  constructor(
    private mobileDetector: MobileDetectorService,
  ) { }

  ngOnInit(): void {
    this.isMobile = this.mobileDetector.isMobile();
  }

  toggleAnimation() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }


  change(destiny: number) {
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
    this.toggleAnimation();
  }

}