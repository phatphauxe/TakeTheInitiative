/**
 * Created by Admin on 1/13/2017.
 */
import {Component} from '@angular/core';
import {CombatantService} from "../../../shared/services/combatantService";
import {Router} from "@angular/router";

@Component({
  selector: 'tti-item-builder',
  styles: [require('./item-builder.style.scss')],
  template: require('./item-builder.template.html')
})

export class ItemBuilderComponent{
  //name, order, dexterity, icon, benifit[], detriment[],

  constructor(private combatantService:CombatantService, private router:Router){

  }

  createNewCombatant(combatant){
    combatant.sessionID = 1;
    this.combatantService.createCombatant(combatant);
    this.router.navigate(['']);

  }
  closeItemBuilder(){
    this.router.navigate(['']);
  }

}
