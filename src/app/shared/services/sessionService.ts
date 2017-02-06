/**
 * Created by Admin on 2/6/2017.
 */
import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Injectable()

export class SessionService {
  constructor(private af:AngularFire){

  }

  getSession(sessionID){
    return this.af.database.object('session/' + sessionID);
  }

  setSession(sessionID, sessionData){
    this.af.database.object('session/' + sessionID).set(sessionData);
  }
}
