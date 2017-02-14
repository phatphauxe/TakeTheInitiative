/**
 * Created by Admin on 2/14/2017.
 */
//facebook signOn component
import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";

@Component ({
  selector: 'tti-signon',
  styles: [],
  template: require('./signOn.template.html')
})
export class SignOnComponent {
  constructor(private af:AngularFire){

  }

  signOnFacebook(){
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  signOnGoogle(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

}
