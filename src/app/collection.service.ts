import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private leafsCollection: Array<object> = [];

  constructor() { }

  addLots (nameLot: string, descriptionLot: string, pictureLot: string, priceLot: number) {

    const plugNum: string = String(this.leafsCollection.length + 1);
    const plug: string = `lot#${plugNum}`;

    const newLot: object = {

      name: nameLot,
      description: descriptionLot,
      picture: pictureLot,
      price: priceLot,
      id: plug

    };

    this.leafsCollection.push(newLot);

  }

  returnCollection () {
    return this.leafsCollection
  }

}
