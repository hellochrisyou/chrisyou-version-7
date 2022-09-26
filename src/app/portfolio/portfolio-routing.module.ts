import { BackgroundComponent } from './features/background/background.component';
import { MusicComponent } from './features/music/music.component';
import { PortfolioComponent } from './portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'background',
    component: BackgroundComponent
  },
  {
    path: 'music',
    component: MusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
