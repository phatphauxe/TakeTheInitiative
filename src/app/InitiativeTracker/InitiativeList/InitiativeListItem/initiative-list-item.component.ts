/**
 * Created by Admin on 1/12/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'tti-list-item',
  styles: [require('./initiative-list-item.style.scss')],
  template: require('./inititative-list-item.template.html')

})

export class ListItemComponent {

  @Input() entry;
  constructor(){

  }
}

