export class Author {
  firstname : string;
  lastname : string;
  id : number;

  static idCourant = 0;

  constructor (prenom : string, nom : string) {
    this.firstname = prenom;
    this.lastname = nom;
    this.id = Author.idCourant++;
  }
}
