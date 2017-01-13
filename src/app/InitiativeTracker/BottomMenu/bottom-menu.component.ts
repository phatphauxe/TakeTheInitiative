/**
 * Created by Admin on 1/11/2017.
 */
import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component ({
  selector: 'tti-bottom-menu',
  styles: [require('./bottom-menu.style.scss')],
  template: require('./bottom-menu.template.html')
})

export class BottomMenuComponent {
  @Input() started:boolean = false;
  @Output() advanceBtnClicked = new EventEmitter();
  @Output() beginBtnClicked = new EventEmitter();

  constructor(){}

  getButtonIconType(){
    if(this.started){
      return 'forward';
    }
    else {
      return 'play_circle_outline';
    }
  }

  startCombat(){
    if(!this.started) {
      this.started = true;
      this.beginBtnClicked.emit(true);
    }
    else {
      //move initiative order
      this.advanceBtnClicked.emit(true);
    }
  }
}
