import { WebsiteMetricsComponent } from './website-metrics/website-metrics.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RoutingStateService } from '../core/service/routing-state.service';
import { MatDialog } from '@angular/material/dialog';
declare var $: any;

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  currentIndex = 0;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private routingStateService: RoutingStateService,
  ) { }

  ngOnInit(): void {
    let $l = $('.left')
    let $r = $('.right')

    $l.mouseenter(function() {
      $('.container').addClass('left-is-hovered');
    }).mouseleave(function() {
      $('.container').removeClass('left-is-hovered');
    });

    $r.mouseenter(function() {
      $('.container').addClass('right-is-hovered');
    }).mouseleave(function() {
      $('.container').removeClass('right-is-hovered');
    });
  }

  navigatePortfolio(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 0;
      this.router.navigateByUrl('/portfolio');
    }, 500);
  }

  navigateLiveProjects(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 0;
      this.router.navigateByUrl('/live-project');
    }, 500);
  }

  openWebsiteMetrics(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(WebsiteMetricsComponent, {
      width: '31rem',
      panelClass: 'metrics-dialog',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
