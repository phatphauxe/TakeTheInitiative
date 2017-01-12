/**
 * Created by Admin on 1/11/2017.
 */
import {Component} from '@angular/core';

@Component ({
  selector: 'tti-bottom-menu',
  styles: [require('./bottom-menu.style.scss')],
  template: require('./bottom-menu.template.html')
})

export class BottomMenuComponent {
  started = false;
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
    }
    else {
      //move initiative order
    }
  }
}
