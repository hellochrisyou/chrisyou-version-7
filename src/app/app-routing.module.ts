import { SplashComponent } from './splash/splash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'live-project',
    loadChildren: () => import(`./live-sample/live-sample.module`).then((m) => m.LiveSampleModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import(`./portfolio/portfolio.module`).then((m) => m.PortfolioModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
