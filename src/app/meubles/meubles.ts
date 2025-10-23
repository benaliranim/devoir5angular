import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { meuble } from '../model/meuble.model';
import { meubleService } from '../services/meuble';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meubles',
  imports: [CommonModule,RouterLink],
  templateUrl:'./meubles.html',
  styleUrls: ['./meuble.css']
  
})
export class meublesComponent implements OnInit { 
  meubles : meuble []=[]; 


  constructor(private meubleService: meubleService )
   { this.meubles = meubleService.listemeubles(); }

  supprimermeuble(event: meuble) { 
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
   this.meubleService.supprimerProduit(event); }



  ngOnInit(): void {

  }
}
