import { Component, OnInit } from '@angular/core';
import { Formacion } from '../../api/interfaces';

const FORMACION: Formacion[] = [
  { posicion: 1, nombre: 'INGENIERIA EN SISTEMAS', establecimiento: 'UTN FRBA', fechaInicio: '2021', fechaFin: '', logo: 'UTNFRBA.png', },
  { posicion: 2, nombre: 'DIPLOMATURA EN PROGRAMACION WEB FULL STACK CON REACT JS', establecimiento: 'CENTRO DE E-LEARNING UTN FRBA', fechaInicio: '2020', fechaFin: '2021', logo: 'elearning.png', },
  { posicion: 3, nombre: 'PROGRAMACION JAVA', establecimiento: 'ITMaster Academy', fechaInicio: '2020', fechaFin: '2020', logo: 'itmaster.svg', },
  { posicion: 4, nombre: 'INGENIERA ELECTRONICA', establecimiento: 'UTN FRH', fechaInicio: '2015', fechaFin: '', logo: 'UTN-FRH.png', },
];



@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'establecimiento', 'logo', 'fechaInicio', 'fechaFin'];
  dataSource = FORMACION;
  lenguajes = ["C", "C++", "Java", "JavaScript", "TypeScript", "Phyton"];
  basesDeDatos = ["MySQL", "MongoDB"];
  frameTec = ["Node.js", "Express", "React", "React Native", "Angular", "Material", "Ionic", "Cordova", "Selenium", "Docker"];

  constructor() { }

  ngOnInit(): void {
  }

}