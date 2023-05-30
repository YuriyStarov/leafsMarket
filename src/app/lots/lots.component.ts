import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CollectionService } from '../collection.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.scss']
})
export class LotsComponent {


  idPath: string | undefined;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private dataService: CollectionService){
    this.subscription = activateRoute.params.subscribe(params=>this.idPath=params['idPath']);
}

returnObject (): object | void {
  let newLotObject: object | undefined;
  this.dataService.returnCollection().forEach((element) => {
    if('id' in element) {
      if (element.id === this.idPath) {
        newLotObject = element;
      }
    };
  });
  return newLotObject;
}

}
