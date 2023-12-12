import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { UserComponent } from '../user/user.component';
import { AjoutCategorieComponent } from '../ajout-categorie/ajout-categorie.component';
import { GestionPorteurComponent } from '../gestion-porteur/gestion-porteur.component';
import { GestionBailleurComponent } from '../gestion-bailleur/gestion-bailleur.component';
import { GestionUserBloqueeComponent } from '../gestion-user-bloquee/gestion-user-bloquee.component';
import { StatistiqueComponent } from '../statistique/statistique.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'utilisateurs',
        component: UserComponent,
      },
      {
        path: 'categorie',
        component: AjoutCategorieComponent,
      },

      {
        path: 'porteur',
        component: GestionPorteurComponent,
      },
      {
        path: 'bailleur',
        component: GestionBailleurComponent,
      },
      {
        path: 'bloque',
        component: GestionUserBloqueeComponent,
      },
      {
        path: 'statistic',
        component: StatistiqueComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
