import { Component } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor (private dataService: CollectionService) {

  }

  validationName (inputElement: HTMLInputElement) {

  };

  validationDescription (inputElement: HTMLInputElement) {

  };

  validationPrice (inputElement: HTMLInputElement) {

  };

  validationPicture (inputElement: HTMLInputElement) {

  };

  sendForm (inputNameElement: HTMLInputElement,inputDescriptionElement: HTMLInputElement,inputPriceElement: HTMLInputElement,inputPictureElement: HTMLInputElement) {
    const newName: string = inputNameElement.value;
    const newDescription: string = inputDescriptionElement.value;
    const newPrice: number = Number (inputPriceElement.value);
    const newPicture: string = `url(../assets/${inputPictureElement.value})`;
    this.dataService.addLots(newName,newDescription,newPicture,newPrice);
  }

}
