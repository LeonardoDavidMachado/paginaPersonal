import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../api/interfaces';

const EXPERIENCIA: Experiencia[] =[
  {empresa: "OneInfo Consulting",inicio:"Marzo 2021",fin:"",puesto:"Desarrollador web fullstack",descripcion:"Desarrollo de frontend tanto en React como en Angular. Trato con clientes en reuniones y demostraciones. Ayudé a otros colaboradores de la empresa que requerían asistencia en proyectos ajenos a mi. OneInfo Consulting es mi primer trabajo como desarrollador.",logo:"oneinfoconsulting.png"},
];

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[];
  constructor() { }

  ngOnInit(): void {
    this.experiencias= EXPERIENCIA;
    this.experiencias[0].logo = this.experiencias[0].logo.toLowerCase();
  }

}
