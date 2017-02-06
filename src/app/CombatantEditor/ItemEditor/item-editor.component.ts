/**
 * Created by Admin on 2/4/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {CombatantService} from "../../shared/services/combatantService";
import {FirebaseObjectObservable} from "angularfire2";
import any = jasmine.any;

@Component({
  selector: 'tti-item-editor',
  styles: [require('./item-editor.style.scss')],
  template: require('./item-editor.template.html')
})

export class ItemEditorComponent implements OnInit{
  private entry = null;
  private entryDynamic:FirebaseObjectObservable<any>;
  constructor(private router:Router, private combatantService:CombatantService, private route: ActivatedRoute){



  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.entryDynamic = this.combatantService.getCombatant(id);
    this.entryDynamic.subscribe((x) => {
      this.entry = x;
    });
  }

  saveItemEditor(updatedSettings){
    this.combatantService.updateCombatant(updatedSettings, this.entry.$key);
    this.router.navigate(['']);
  }

  closeItemEditor(){
    this.router.navigate(['']);
  }

  deleteItemEditor(){
    this.combatantService.removeCombatant(this.entry.$key);
    this.router.navigate(['']);
  }
}
