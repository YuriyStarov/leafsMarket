import { Component } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  arrayMain: any;

  booleanFormName: boolean = true;

  booleanFormDescription: boolean = true;

  booleanFormPrice: boolean = true;

  booleanFormPicture: boolean = true;

  booleanAdmin: boolean = false;

  constructor (private dataService: CollectionService) {
    this.arrayMain = this.dataService.returnCollection();
  }

  mainBoolean () {
    this.booleanAdmin = !this.booleanFormName && !this.booleanFormDescription && !this.booleanFormPrice && !this.booleanFormPicture;
  }

  validationName (inputElement: HTMLInputElement) {

    const inputValue: string = inputElement.value;
    if (!inputValue) {
      this.booleanFormName = true;
      this.mainBoolean();
      return
    };
    const inputValueLength: number = inputValue.length;
    const strRegExp: string = `[\\p{L}\\s\`]{${inputValueLength}}`;
    const regexp = new RegExp(strRegExp,"u");
    if (regexp.test(inputValue)) {
      this.booleanFormName = false;
    }
    else {
      this.booleanFormName = true;
    };
    this.mainBoolean();
  };

  validationDescription (inputElement: HTMLInputElement) {
    const inputValue: string = inputElement.value;
    if (!inputValue) {
      this.booleanFormDescription = true;
      this.mainBoolean();
      return
    };
    const inputValueLength: number = inputValue.length;
    const strRegExp: string = `[\\p{L}\\s\\d]{${inputValueLength}}`;
    const regexp = new RegExp(strRegExp,"u");
    if (regexp.test(inputValue)) {
      this.booleanFormDescription = false;
    }
    else {
      this.booleanFormDescription = true;
    };
    this.mainBoolean();
  };

  validationPrice (inputElement: HTMLInputElement) {
    const inputValue: string = inputElement.value;
    if (!inputValue) {
      this.booleanFormPrice = true;
      this.mainBoolean();
      return
    };
    const inputValueLength: number = inputValue.length;
    const strRegExp: string = `\\d{${inputValueLength}}`;
    const regexp = new RegExp(strRegExp);
    if (regexp.test(inputValue)) {
      this.booleanFormPrice = false;
    }
    else {
      this.booleanFormPrice = true;
    };
    this.mainBoolean();
  };

  validationPicture (inputElement: HTMLInputElement) {
    const img = new Image();
    img.src = `../assets/showcase/${inputElement.value}`;
    img.onload = () => {this.booleanFormPicture = false; this.mainBoolean();};
    img.onerror = () => {this.booleanFormPicture = true; this.mainBoolean();};
  };

  sendForm (inputNameElement: HTMLInputElement,inputDescriptionElement: HTMLInputElement,inputPriceElement: HTMLInputElement,inputPictureElement: HTMLInputElement) {

    if (!this.booleanAdmin) {
      return
    };
    const newName: string = inputNameElement.value;
    const newDescription: string = inputDescriptionElement.value;
    const newPrice: number = Number (inputPriceElement.value);
    const newPicture: string = `url(../assets/showcase/${inputPictureElement.value})`;
    inputNameElement.value = '';
    inputDescriptionElement.value = '';
    inputPriceElement.value = '';
    inputPictureElement.value = '';
    this.booleanFormName = true;
    this.booleanFormDescription = true;
    this.booleanFormPicture = true;
    this.booleanFormPrice = true;
    this.booleanAdmin = false;
    this.dataService.addLots(newName,newDescription,newPicture,newPrice);
  }

  imageLot (item: object): string | void  {
  let path: string = '';
  if ('picture' in item) {
    path = String (item.picture);
  }
  return path
  }

  nameRender (item: object): string | void {
  if ('name' in item) {
    const newName: string = String (item.name);
    return newName;
  }
  }

  numLotRender (item: object): string | void {
    if ('id' in item) {
      const newNum: string = String (item.id);
      return newNum;
    }
  }

  deleteLot (index: number) {
    this.dataService.removeLot(index);
  }

}

