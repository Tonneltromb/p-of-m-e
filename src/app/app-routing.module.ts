import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {BattleComponent} from './pages/battle-area/battle.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'battle-area', component: BattleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
