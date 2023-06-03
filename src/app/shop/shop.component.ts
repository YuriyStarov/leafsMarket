import { Component } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  
constructor (private dataService: CollectionService) {

}

returnCollection () {
  return this.dataService.returnCollection();
}

status (lotObject: object) {
  if ('purchaseStatus' in lotObject) {
    return !lotObject.purchaseStatus
  }
  else {
    return 
  }
}

pathImage (lotObject: object) {
  let path: string = '';
  if ('picture' in lotObject) {
    path = String(lotObject.picture);
  }
  return path;
}

pathName (lotObject: object) {
  let path: string = '';
  if ('name' in lotObject) {
    path = String(lotObject.name);
  }
  return path;
}

pathNum (lotObject: object) {
  let path: number = 0;
  if ('numPurchases' in lotObject) {
    path = Number(lotObject.numPurchases);
  }
  return path;
}

pathSum (lotObject: object) {
  let path: number = 0;
  if ('price' in lotObject) {
    path = Number(lotObject.price)*this.pathNum(lotObject);
  }
  return path;
}

plusPurchases (lotObject: object, direction: boolean) {
  if ('numPurchases' in lotObject) {
    const newSum: number = Number(lotObject.numPurchases);
    if (direction) {
      lotObject.numPurchases = newSum + 1;
    } 
    else {
       if (lotObject.numPurchases) {
        lotObject.numPurchases = newSum - 1;
        };
    };
    this.dataService.updateBuffer()
  }
}

deletePurchase (lotObject: object) {
  if ('numPurchases' in lotObject && 'purchaseStatus' in lotObject) {
    lotObject.numPurchases = 0;
    lotObject.purchaseStatus = false;
  }
}

}
