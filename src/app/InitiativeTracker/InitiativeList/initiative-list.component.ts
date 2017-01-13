/**
 * Created by Admin on 1/11/2017.
 */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component ({
  selector: 'tti-initiative-list',
  styles: [require('./initiative-list.style.scss')],
  template: require('./initiative-list.template.html')
})

export class InitiativeListComponent implements OnInit{
  @Input('round') round;
  @Input() initiativeList;
  constructor(){}

  ngOnInit(){

  }
}
