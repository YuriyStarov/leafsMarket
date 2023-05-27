import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() newEmit = new EventEmitter<string>();

  constructor () {

  }

  filterList (inputFilter: HTMLInputElement) {
    const newValue: string = inputFilter.value;
    const valueLength: number = newValue.length;
    if (valueLength) {
      this.newEmit.emit(newValue);
    }
  };

}
