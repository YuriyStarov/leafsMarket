import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private leafsCollection: Array<object> = [{name: 'dodo', description: 'hfbchfbcf fvfcfvf gbhybhb hybyby', picture: 'fern.jpg', price: 300},{name: 'baba', description: 'hfbchfbcf fvfcfvf gbhybhb hybyby', picture: 'pine.jpg', price: 400},{name: 'sisi', description: 'hfbchfbcf fvfcfvf gbhybhb hybyby', picture: 'palm.jpg', price: 500}];

  constructor() { }

  addLots (nameLot: string, descriptionLot: string, pictureLot: string, priceLot: number) {

    const newLot: object = {

      name: nameLot,
      description: descriptionLot,
      picture: pictureLot,
      price: priceLot

    };

    this.leafsCollection.push(newLot);

  }

  returnCollection () {
    return this.leafsCollection
  }

}
