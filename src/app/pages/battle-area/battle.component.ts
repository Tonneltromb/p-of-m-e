import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Skill } from '../../models/skill/skill.model.class';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BattleComponent implements OnInit {
  skills: Skill[];

  constructor() { }

  ngOnInit() {
    this.skills = [
      new Skill(),
      new Skill(),
      new Skill(),
    ];
  }
}
