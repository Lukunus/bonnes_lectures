export class Author {
  firstname : string;
  lastname : string;
  id : bigint;
  livres : bigint[];

  static idCourant = 0n;

  constructor (prenom : string, nom : string) {
    this.firstname = prenom;
    this.lastname = nom;
    this.id = Author.idCourant++;
    this.livres = new Array<bigint>();
  }
}
