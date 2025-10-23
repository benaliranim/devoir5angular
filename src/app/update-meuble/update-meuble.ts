import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { meuble } from '../model/meuble.model';
import { meubleService } from '../services/meuble';
import { materiau } from '../model/materiau.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatemeuble',
  templateUrl: './update-meuble.html', // your HTML file
  //styleUrls: ['./update-meuble.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class UpdatemeubleComponent implements OnInit {

  currentMeuble!: meuble;
  currentMateriauId!: number;
  materiaus: materiau[] = [];

  constructor(private meubleService: meubleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.currentMeuble = this.meubleService.consultermeuble(id);
    this.currentMateriauId = this.currentMeuble.materiau.idmateriau;
    this.materiaus = this.meubleService.listemateriaus();
  }

  updateMeuble(): void {
    const selectedMateriau = this.meubleService.consultermateriau(this.currentMateriauId);
    this.currentMeuble.materiau = selectedMateriau;

    this.meubleService.updatemeuble(this.currentMeuble);

    alert('Meuble mis à jour avec succès!');
    this.router.navigate(['/recherche-par-materiau']);
  }
}
