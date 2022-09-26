import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { RoutingStateService } from '../core/service/routing-state.service';

@Component({
  selector: 'app-live-sample',
  templateUrl: './live-sample.component.html',
  styleUrls: ['./live-sample.component.scss']
})
export class LiveSampleComponent implements OnInit, AfterViewInit {
  currentIndex = 1;
  isNavList = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public routingStateService: RoutingStateService
  ) {
  }
  ngAfterViewInit(): void {
    this.toggleHamburger();
  }
  ngOnInit(): void {
  }

  public navigateHome(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 0;
      this.router.navigateByUrl('/');
    }, 500);
  }

  public navigateSkills(): void {
    if (this.currentIndex === 1) {
      return;
    }
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 1;
    }, 500);
  }

  public navigateProjects(): void {
    if (this.currentIndex === 2) {
      return;
    }
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 2;
    }, 500);
  }

  public navigatePrevVersions(): void {
    if (this.currentIndex === 3) {
      return;
    }
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 3;
    }, 500);
  }

  toggleHamburger(): void {
    this.isNavList = !this.isNavList;
  }
}
