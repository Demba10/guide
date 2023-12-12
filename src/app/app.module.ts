import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutCategorieComponent } from './admin/ajout-categorie/ajout-categorie.component';
import { GestionPorteurComponent } from './admin/gestion-porteur/gestion-porteur.component';
import { GestionBailleurComponent } from './admin/gestion-bailleur/gestion-bailleur.component';
import { GestionUserBloqueeComponent } from './admin/gestion-user-bloquee/gestion-user-bloquee.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './admin/service/category.service';
import { StatistiqueComponent } from './admin/statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutCategorieComponent,
    GestionPorteurComponent,
    GestionBailleurComponent,
    GestionUserBloqueeComponent,
    StatistiqueComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
