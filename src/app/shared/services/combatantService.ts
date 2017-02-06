import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';
@Injectable()
export class CombatantService {

  constructor(private af:AngularFire){

  }

  getSessionByID(sessionID){
    return this.af.database.list('combatants', {
      query: {
        orderByChild: 'sessionID',
        equalTo: sessionID
      }
    });
  }

  createCombatant(combatant){
    this.af.database.list('combatants').push(combatant);
  }

  getCombatant(key){
    return this.af.database.object('combatants/' + key);
  }
  updateCombatant(updateData:any, key:string){
    this.af.database.object('combatants/'+ key).update(updateData);
  }

  removeCombatant(key:string){
    this.af.database.object('combatants/'+key).remove();
  }

}
