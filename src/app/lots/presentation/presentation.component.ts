import { Component, Input } from '@angular/core';
import { CollectionService } from 'src/app/collection.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  @Input() lotObject: object | void | undefined;
  constructor(private dataService: CollectionService){
  };

  pathImage () {
    let path: string = '';
    if ('picture' in this.lotObject!) {
      path = String(this.lotObject.picture);
    }
    return path;
  }

  pathName () {
    let path: string = '';
    if ('name' in this.lotObject!) {
      path = String(this.lotObject.name);
    }
    return path;
  }

  pathDescription () {
    let path: string = '';
    if ('description' in this.lotObject!) {
      path = String(this.lotObject.description);
    }
    return path;
  }

  countLot () {
    if ('numPurchases' in this.lotObject!) {

      if (typeof this.lotObject.numPurchases === 'number') {
        this.lotObject.numPurchases += 1;
      };
      
    };
  };

  buyLot () {
    if ('numPurchases' in this.lotObject!) {
      this.countLot();
      this.dataService.counterPurchases();
    };
    
  };

  returnNumLot () {
    if ('numPurchases' in this.lotObject!) {

      return this.lotObject.numPurchases;
      
    };
    
  }
}
