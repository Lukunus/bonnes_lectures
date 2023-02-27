export class Book {
  title : string;
  publisher : string;
  year : number;
  isbn : number;
  backCover : string;
  cover : boolean;

  static isbnCourant= 0;

  constructor() {
    this.title="";
    this.publisher="";
    this.year=0;
    this.isbn=Book.isbnCourant++;
    this.backCover="";
    this.cover=true;
  }
}
