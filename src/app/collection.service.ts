import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private leafsCollection: Array<object> = [];

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

}
