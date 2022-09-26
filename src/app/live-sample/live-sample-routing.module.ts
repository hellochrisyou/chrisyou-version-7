import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevVersionComponent } from './features/prev-version/prev-version.component';
import { ProjectComponent } from './features/project/project.component';

import { SkillsComponent } from './features/skills/skills.component';
import { LiveSampleComponent } from './live-sample.component';

const routes: Routes = [
  {
    path: '',
    component: LiveSampleComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'previous-versions',
    component: PrevVersionComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveSampleRoutingModule { }
