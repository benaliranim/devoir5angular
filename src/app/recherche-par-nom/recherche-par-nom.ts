import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { meuble } from '../model/meuble.model';
import { meubleService } from '../services/meuble';
import { SearchFilterPipe } from "../search-filter-pipe";



@Component({
  selector: 'app-recherche-par-nom',
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styleUrls:[ './rechercheN.css']
})
export class RechercheParNom implements  OnInit{
  nommeuble!: string;
  allmeubles!: meuble[];
  meubles: meuble[] = []; 
  searchTerm!: string;
  Idmateriau!: number;


  constructor(private meubleService: meubleService) {}
  ngOnInit(): void {
      this.meubleService.listemeubles1().subscribe (events => {
      console.log(events);
      this.meubles = events;
    })
  }

  onKeyUp(filterText: string) {
    this.meubles = this.allmeubles.filter(item =>
      item.nommeuble.toLowerCase().includes(filterText));
  }
    
}
