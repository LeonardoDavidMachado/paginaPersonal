import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'formacion', component: FormacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
