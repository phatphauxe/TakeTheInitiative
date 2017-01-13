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
  @Output() addNewCombatant = new EventEmitter<any>();
  @Output() resetAll = new EventEmitter<boolean>();
  constructor(){}

  clearList(){
    this.resetAll.emit(true);
  }

  addCombatant(){
    let number = this.count;
    this.count = this.count + 1;
    let order = Math.ceil(Math.random() * 20);
    this.addNewCombatant.emit({name:`Player ${number}`, order:`${order}`});

  }


}
