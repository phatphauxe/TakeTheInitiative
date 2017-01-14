/**
 * Created by Admin on 1/13/2017.
 */
import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'tti-item-builder',
  styles: [require('./item-builder.style.scss')],
  template: require('./item-builder.template.html')
})

export class ItemBuilderComponent{
  @Input() showBuilder:boolean;
  @Output() closeBuilder = new EventEmitter<boolean>();
  //name, order, dexterity, icon, benifit[], detriment[],

  component(){

  }

  closeItemBuilder(){
    this.closeBuilder.emit(false);
  }

}
