import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';




const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'formulario', component: FormularioComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
