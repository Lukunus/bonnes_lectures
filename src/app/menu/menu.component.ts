import { Component } from '@angular/core';
import { Book } from "../../entity/Book";
import { Author } from "../../entity/Author";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  livre : Book = new Book();
  auteur : Author = new Author("Baptiste","Le Gouhinc");


}
