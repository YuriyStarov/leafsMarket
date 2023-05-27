import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  filterRegular: string | undefined;

  constructor () {

  }

  filterList (regular: string) {
    this.filterRegular = regular;
  }

}
