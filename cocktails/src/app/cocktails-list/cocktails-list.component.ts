import { Component, OnInit } from '@angular/core';
import { Cocktails } from '../cocktails';
import { CocktailServiceService} from '../cocktail.service';


@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
    cocktails: any;
    
    constructor(private cocktailService:CocktailServiceService){}

    ngOnInit(): void {
        console.log("this.cocktails");
        this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
          this.cocktails = cocktailsFromJsonFile;
        });
    }
}