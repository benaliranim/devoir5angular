import { Injectable } from '@angular/core';
import { meuble } from '../model/meuble.model';
import { materiau } from '../model/materiau.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class meubleService {
  meubles: meuble[] = [];
  meuble!: meuble;
  materiaus: materiau[] = [];
  meublesRecherche: meuble[] = [];  

  constructor() {

    // 🪵 Liste des materiaux disponibles
    this.materiaus = [
      { idmateriau: 1, nommateriau: "Bois" },
      { idmateriau: 2, nommateriau: "Métal" },
      { idmateriau: 3, nommateriau: "Tissu / Cuir" },
      { idmateriau: 4, nommateriau: "Pierre / Marbre" },
      { idmateriau: 5, nommateriau: "Verre" }
    ];

    // 🪑 Liste des meubles
    this.meubles = [
      {
        idmeuble: 1,
        nommeuble: "Chaise Scandinave",
        prix: 250,
        description: "Chaise confortable en bois naturel et tissu beige.",
        materiau: { idmateriau: 1, nommateriau: "Bois" }
      },
      {
        idmeuble: 2,
        nommeuble: "Table en Marbre Blanc",
        prix: 890,
        description: "Table élégante en marbre blanc avec pied en métal doré.",
        materiau: { idmateriau: 4, nommateriau: "Pierre / Marbre" }
      },
      {
        idmeuble: 3,
        nommeuble: "Canapé en Cuir Noir",
        prix: 2100,
        description: "Canapé 3 places en cuir véritable, design moderne.",
        materiau: { idmateriau: 3, nommateriau: "Tissu / Cuir" }
      },
      {
        idmeuble: 4,
        nommeuble: "Bureau en Métal Industriel",
        prix: 590,
        description: "Bureau de style industriel avec structure en métal et plateau en bois brut.",
        materiau: { idmateriau: 2, nommateriau: "Métal" }
      },
      {
        idmeuble: 5,
        nommeuble: "Table Basse en Verre",
        prix: 450,
        description: "Table basse élégante en verre trempé et acier chromé.",
        materiau: { idmateriau: 5, nommateriau: "Verre" }
      },
      {
        idmeuble: 6,
        nommeuble: "Armoire en Bois Massif",
        prix: 1300,
        description: "Grande armoire 3 portes en chêne massif, finition naturelle.",
        materiau: { idmateriau: 1, nommateriau: "Bois" }
      },
      {
        idmeuble: 7,
        nommeuble: "Chaise de Bureau Ergonomique",
        prix: 320,
        description: "Chaise de bureau en tissu respirant avec base en métal noir.",
        materiau: { idmateriau: 2, nommateriau: "Métal" }
      },
      {
        idmeuble: 8,
        nommeuble: "Commode Vintage en Bois",
        prix: 760,
        description: "Commode à 4 tiroirs en bois recyclé style vintage.",
        materiau: { idmateriau: 1, nommateriau: "Bois" }
      }
    ];
  }

  // 🔹 Retourner tous les meubles
  listemeubles1(): Observable<meuble[]> {
    return of(this.meubles);
  }

  // 🔹 Supprimer un meuble
  supprimerProduit(m: meuble) {
    const index = this.meubles.indexOf(m, 0);
    if (index > -1) {
      this.meubles.splice(index, 1);
    }
  }

  listemeubles(): meuble[] {
    return this.meubles;
  }

  // 🔹 Ajouter un meuble
  ajoutermeuble(m: meuble) {
    this.meubles.push(m);
  }

  // 🔹 Consulter un meuble
  consultermeuble(id: number): meuble {
    this.meuble = this.meubles.find(p => p.idmeuble == id)!;
    return this.meuble;
  }

  // 🔹 Mettre à jour un meuble
  updatemeuble(m: meuble) {
    const index = this.meubles.findIndex(e => e.idmeuble === m.idmeuble);
    if (index > -1) {
      this.meubles[index] = m;
    }
  }

  // 🔹 Retourner tous les materiaux
  listemateriaus(): materiau[] {
    return this.materiaus;
  }

  // 🔹 Consulter un materiau
  consultermateriau(id: number): materiau {
    return this.materiaus.find(cat => cat.idmateriau == id)!;
  }

  // 🔹 Rechercher les meubles par materiau
  rechercherParmateriau(idmateriau: number): meuble[] {
    this.meublesRecherche = [];
    this.meubles.forEach(cur => {
      if (idmateriau == cur.materiau?.idmateriau) {
        this.meublesRecherche.push(cur);
      }
    });
    return this.meublesRecherche;
  }
}
