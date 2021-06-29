import { Component, OnInit } from '@angular/core';

export interface Formacion {
  posicion: number;
  nombre: string;
  establecimiento: string;
  fechaInicio: string;
  fechaFin: string;
  logo: string;
}

const FORMACION: Formacion[] = [
 {posicion:1, nombre: 'INGENIERIA EN SISTEMAS', establecimiento: 'UTN FRBA', fechaInicio:'2021',fechaFin:'',logo:'UTNFRBA.png',},
 {posicion:2, nombre: 'DIPLOMATURA EN PROGRAMACION WEB FULL STACK CON REACT JS', establecimiento: 'CENTRO DE E-LEARNING UTN FRBA', fechaInicio:'2020',fechaFin:'2021',logo:'elearning.png',},
 {posicion:3, nombre: 'PROGRAMACION JAVA', establecimiento: 'ITMaster Academy', fechaInicio:'2020',fechaFin:'2020',logo:'itmaster.svg',},
 {posicion:4, nombre: 'INGENIERA ELECTRONICA', establecimiento: 'UTN FRH', fechaInicio:'2015',fechaFin:'',logo:'UTN-FRH.png',},
//  {posicion:5, nombre: '', establecimiento: '', fechaInicio:'',fechaFin:'',logo:'',},
];

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'establecimiento', 'logo', 'fechaInicio','fechaFin'];
  dataSource = FORMACION;

  constructor() { }

  ngOnInit(): void {
  }

}