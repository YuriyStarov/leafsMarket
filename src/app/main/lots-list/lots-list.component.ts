import { Component, Input } from '@angular/core';
import { CollectionService } from 'src/app/collection.service';

@Component({
  selector: 'app-lots-list',
  templateUrl: './lots-list.component.html',
  styleUrls: ['./lots-list.component.scss']
})
export class LotsListComponent {

  @Input() regular: string | undefined;
  


  constructor (private dataService: CollectionService) {
    
  }

  render (item: object): string | void  {
    let bool: string;
    if (!this.regular) {
      bool = 'block';
      return bool
    } 
    else {
      if ('name' in item) {
        const regexp = new RegExp(this.regular!)
        if (typeof item.name === 'string') {
          const itemValue: string = item.name;
          if(regexp.test(itemValue)) {
            bool = 'block';
          }
          else {
            bool = 'none';
          };
          return bool;
        }
      };
    };
  }

}
