import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private leafsCollection: Array<object> = [];

  numLot: number = 1;

  constructor() { }

  addLots (nameLot: string, descriptionLot: string, pictureLot: string, priceLot: number) {

    const plugNum: string = String(this.numLot);
    const plug: string = `lot#${plugNum}`;

    const newLot: object = {

      name: nameLot,
      description: descriptionLot,
      picture: pictureLot,
      price: priceLot,
      id: plug

    };

    this.leafsCollection.push(newLot);
    this.numLot += 1;

  }

  removeLots (idLot: string) {

    this.leafsCollection.forEach((element: object, index: number) => {
      if ('id' in element) {
        const realRegExp: string = String(element.id);
        const regexp = new RegExp(realRegExp);
        if (regexp.test(idLot) && (realRegExp.length === idLot.length)) {
            this.leafsCollection.splice(index,1);
            return
        };
      };
    });

  }

  returnCollection () {
    return this.leafsCollection
  }

}
