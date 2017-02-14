/**
 * Created by Admin on 1/12/2017.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'tti-list-item',
  styles: [require('./initiative-list-item.style.scss')],
  template: require('./inititative-list-item.template.html')

})

export class ListItemComponent {
  @Input() index;
  @Input() entry;
  @Output() removeCombatant = new EventEmitter<any>();
  constructor(private router:Router){

  }

  removeListItem(e){
    e.preventDefault();
    this.router.navigate(['/combatant/' + this.entry.$key]);
  }
}

