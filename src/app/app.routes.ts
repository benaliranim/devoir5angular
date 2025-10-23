import { Routes } from '@angular/router';
import { meublesComponent } from './meubles/meubles';
import { AddmeubleComponent } from './add-meuble/add-meuble';
import { UpdatemeubleComponent } from './update-meuble/update-meuble';
import { RechercheParMateriauComponent } from './recherche-par-materiau/recherche-par-matériau';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
    {path: "meubles", component : meublesComponent},
    {path: "add-meuble", component : AddmeubleComponent},
    {path: "updatemeuble/:id", component: UpdatemeubleComponent},
    {path: "rechercheParmateriau", component :RechercheParMateriauComponent},
    {path: "rechercheParNom", component : RechercheParNom},
    {path: "", redirectTo: "meubles", pathMatch: "full"}
];
