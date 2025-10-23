import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { meuble } from '../model/meuble.model';
import { meubleService } from '../services/meuble';
import { materiau } from '../model/materiau.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-meuble',
  imports: [FormsModule],
  templateUrl: './add-meuble.html',
})
export class AddmeubleComponent implements OnInit {
  
   newmeuble = new meuble();

   materiaus! : materiau[];
    newidmateriau! : number;
     newmateriau! : materiau;

  constructor(private meubleService: meubleService ,
    private router :Router
  ) { }

   addmeuble(){ // console.log(this.newmeuble); 
    this.newmateriau = this.meubleService.consultermateriau(this.newidmateriau); this.newmeuble.materiau = this.newmateriau;
   this.meubleService.ajoutermeuble(this.newmeuble);
  this.router.navigate(['meubles']); }
  
  
  ngOnInit(): void {
    this.materiaus = this.meubleService.listemateriaus();
  }

 

}
