import { Component } from '@angular/core';
import { CollectionService } from 'src/app/collection.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  constructor (private dataService: CollectionService) {

  }
  
  allPurchases () {

    const sum: number = this.dataService.readyPurchase();
    return sum;

  }

}
