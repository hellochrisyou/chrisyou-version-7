import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrevVersionComponent } from './features/prev-version/prev-version.component';
import { VersionCardDetailsComponent } from './features/prev-version/version-card-details/version-details-card.component';
import { ProjectComponent } from './features/project/project.component';
import { SkillsComponent } from './features/skills/skills.component';

import { LiveSampleRoutingModule } from './live-sample-routing.module';
import { LiveSampleComponent } from './live-sample.component';

@NgModule({
  declarations: [
    LiveSampleComponent,
    VersionCardDetailsComponent,
    PrevVersionComponent,
    ProjectComponent,
    SkillsComponent
  ],
  imports: [
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    LiveSampleRoutingModule

  ],
  exports: [
    LiveSampleComponent,
    PrevVersionComponent,
    ProjectComponent
  ],
  entryComponents: [
    VersionCardDetailsComponent
  ]
})
export class LiveSampleModule { }
