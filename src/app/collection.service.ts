import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private leafsCollection: Array<object>;

  numLot: number;
  countPurchases: number;

  constructor() {

    this.leafsCollection = (() => {
      if (localStorage.getItem('memory')) {

        const memoryObject: object = JSON.parse(localStorage.getItem('memory')!);
        if ('market' in memoryObject && Array.isArray(memoryObject.market)) {
  
          return memoryObject.market;
  
        }
  
      };
  
      const newMarket: Array<object> = [];
      return newMarket;
    })();

    this.countPurchases = (() => {
      if (localStorage.getItem('memory')) {

        const memoryObject: object = JSON.parse(localStorage.getItem('memory')!);
        if ("purchases" in memoryObject && typeof memoryObject.purchases === "number") {
  
          return memoryObject.purchases;
  
        }
  
      };
  
      return 0;
    })();

    this.numLot = (() => {
      if (localStorage.getItem('memory')) {

        const memoryObject: object = JSON.parse(localStorage.getItem('memory')!);
        if ("countLot" in memoryObject && typeof memoryObject.countLot === "number") {
  
          return memoryObject.countLot;
  
        }
  
      };
  
      return 1;
    })();

   }

  returnCollection () {
    return this.leafsCollection
  }

  updateBuffer () {
    localStorage.clear();
    const memoryObject = {
      market: this.returnCollection(),
      countLot: this.numLot,
      purchases: this.countPurchases
    };
    localStorage.setItem('memory', JSON.stringify(memoryObject));
  };

  addLots (nameLot: string, descriptionLot: string, pictureLot: string, priceLot: number) {

    const plugNum: string = String(this.numLot);
    const plug: string = `lot${plugNum}`;
    const arrayComments: Array<string> = [];

    const newLot: object = {

      name: nameLot,
      description: descriptionLot,
      picture: pictureLot,
      price: priceLot,
      id: plug,
      numPurchases: 0,
      comment: arrayComments

    };

    this.leafsCollection.push(newLot);
    this.numLot += 1;

    this.updateBuffer();

  }

  removeLot (index: number) {

    this.leafsCollection.splice(index,1);

    this.updateBuffer();

  }

  counterPurchases () {
    this.countPurchases += 1;
    this.updateBuffer();
  }

}
