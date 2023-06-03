import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  leafsCollection: Array<object>;

  numLot: number;

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
      purchaseStatus: false,
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

  readyPurchase () {
    const myMainArray: Array<object> = this.returnCollection();
    const sum = myMainArray.reduce((acc: number, element: object) => {
        if ('numPurchases' in element && typeof element.numPurchases === 'number') {
          acc = acc + element.numPurchases;
        };
        return acc
    },0)
    return sum
  }

}
