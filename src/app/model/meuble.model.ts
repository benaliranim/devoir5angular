import { materiau } from "./materiau.model";

export class meuble {
  idmeuble!: number;
  nommeuble!: string;
  description!: string;
  prix!: number;
  materiau!: materiau;
}
