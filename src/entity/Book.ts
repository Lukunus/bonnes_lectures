export class Book {
  title : string;
  publisher : string;
  year : number;
  isbn : bigint;
  backCover : string;
  cover : boolean;
  auteurs : bigint[];

  static isbnCourant= 0n;

  constructor() {
    this.title="";
    this.publisher="";
    this.year=0;
    this.isbn=Book.isbnCourant++;
    this.backCover="";
    this.cover=true;
    this.auteurs=new Array<bigint>();
  }
}
