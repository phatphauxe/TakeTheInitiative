/**
 * Created by Admin on 1/11/2017.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import any = jasmine.any;

@Component ({
  selector: 'tti-top-menu',
  styles: [require('./top-menu.style.scss')],
  template: require('./top-menu.template.html')
})

export class TopMenuComponent {
  count:number = 0;
  @Output() addNewCombatant = new EventEmitter<boolean>();
  @Output() resetAll = new EventEmitter<boolean>();
  constructor(){}

  clearList(e){
    e.preventDefault();
    this.resetAll.emit(true);
  }

  addCombatant(e){
    e.preventDefault();
    this.addNewCombatant.emit(true);

  }


}
