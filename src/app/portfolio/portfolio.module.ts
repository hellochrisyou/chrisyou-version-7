import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from 'src/app/shared/shared.module';

import { BackgroundComponent } from './features/background/background.component';
import { MusicComponent } from './features/music/music.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ContactComponent } from './features/contact/contact.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    BackgroundComponent,
    MusicComponent,
    ContactComponent,
  ],
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ],
  exports: [
    PortfolioComponent,
    BackgroundComponent,
    MusicComponent,
  ],
})
export class PortfolioModule { }
