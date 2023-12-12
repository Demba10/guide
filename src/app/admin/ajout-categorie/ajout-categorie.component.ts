import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css'],
})
export class AjoutCategorieComponent {
  tabNote: any[] = [];
  doneAdd: any = {};
  storeEvaluation: any;
  public storeNotes: any;
  usersNotes: any;

  // methode pour ajouter les donnees
  addData() {
    this.tabNote.push(this.doneAdd);
    this.saveNoteApprenant();
    // reinitialise le formulaire
    this.doneAdd = {};
    Swal.fire({
      title: 'Felicitation!',
      text: 'Note ajouté avec succes',
      icon: 'success',
    });
  }
  saveNoteApprenant() {
    localStorage.setItem('mesNotes', JSON.stringify(this.tabNote));
  }

  ngOnInit(): void {
    const noteApprenant = localStorage.getItem('mesNotes');
    if (noteApprenant) {
      this.tabNote = JSON.parse(noteApprenant);
    }
    this.storeNotes = localStorage.getItem('notes');
    console.log(this.usersNotes);
    if (this.storeEvaluation) {
      this.usersNotes = JSON.parse(this.storeNotes);
      console.log(this.usersNotes);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      // localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }
}

