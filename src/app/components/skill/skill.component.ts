import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Skill } from '../../models/skill/skill.model.class';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
