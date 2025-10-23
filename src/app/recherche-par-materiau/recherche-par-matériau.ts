import { Component, OnInit } from '@angular/core';
import { meuble } from '../model/meuble.model';
import { materiau } from '../model/materiau.model';
import { meubleService } from '../services/meuble';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recherche-par-materiau',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recherche-par-materiau.html',
  styleUrls: ['./recherche.css']
})
export class RechercheParMateriauComponent implements OnInit {

  meubles: meuble[] = [];           // All filtered meubles
  selectedMateriauId!: number;      // selected material ID
  materiaus: materiau[] = [];       // List of materials

  constructor(private meubleService: meubleService) {
    this.materiaus = meubleService.listemateriaus();
    this.meubles = [];
  }

  ngOnInit(): void {
    // Optionally: show all meubles initially
    this.meubles = this.meubleService.listemeubles();
  }

  onChange(): void {
    console.log('Selected material ID:', this.selectedMateriauId);
    if (this.selectedMateriauId) {
      this.meubles = this.meubleService.rechercherParmateriau(this.selectedMateriauId);
    } else {
      this.meubles = this.meubleService.listemeubles();
    }
  }

  supprimerMeuble(meuble: meuble): void {
    let conf = confirm("Êtes-vous sûr de vouloir supprimer ce meuble ?");
    if (conf) {
      this.meubleService.supprimerProduit(meuble);
      this.onChange(); // refresh list
    }
  }
}
