/**
 * Created by Admin on 1/12/2017.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tti-list-item',
  styles: [require('./initiative-list-item.style.scss')],
  template: require('./inititative-list-item.template.html')

})

export class ListItemComponent {

  @Input() entry;
  @Output() removeCombatant = new EventEmitter<any>();
  constructor(){

  }

  removeListItem(e){
    e.preventDefault();
    this.removeCombatant.emit(this.entry);
  }
}

