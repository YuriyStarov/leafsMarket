import { Component, Input } from '@angular/core';
import { CollectionService } from 'src/app/collection.service';

@Component({
  selector: 'app-lots-list',
  templateUrl: './lots-list.component.html',
  styleUrls: ['./lots-list.component.scss']
})
export class LotsListComponent {

  @Input() regular: string | undefined = '';
  valueLength: number = 0;
  
  arrayMain: any;

  constructor (private dataService: CollectionService) {
    this.arrayMain = this.dataService.returnCollection();
  }


  render (item: object): boolean | void  {

    let bool: boolean = false;

    if ('name' in item) {
      const regexp = new RegExp(this.regular!);
      const itemValue: string = String(item.name);
        if(!regexp.test(itemValue) && (this.regular !== '')) {
          bool = true;
        }
    }

    return bool;
  }

  imageLot (item: object): string | void  {
    let path: string = '';
    if ('picture' in item) {
      path = String (item.picture);;
    }
    return path
  }

  nameRender (item: object): string | void {
    if ('name' in item) {
      const newName: string = String (item.name);
      return newName;
    }
  }

  priceRender (item: object): string | void {
    if ('price' in item) {
      const newStr: string = String (item.price);
      const newPrice: string = `${newStr} ₴`;
      return newPrice;
    }
  }

  realId (item: object): string | void  {
    if ('id' in item) {
      const newPath: string =  String (item.id);
      return newPath;
    }
  }

}
