import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingStateService } from '../core/service/routing-state.service';
declare var $: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  currentIndex = 1;

  constructor(
    public router: Router,
    public routingStateService: RoutingStateService
    ) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {


    let tmpVar = this;
    $('.menu-collapsed').click(function () {
      $(tmpVar).toggleClass('menu-expanded');
    });
  }

  getState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public navigateHome(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 0;
      this.router.navigateByUrl('/');
    }, 500);
  }

  public navigateBackground(): void {
    if (this.currentIndex === 1) {
      return;
    }
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 1;
    }, 500);
  }

  public navigateMusic(): void {
    if (this.currentIndex === 2) {
      return;
    }
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 2;
    }, 500);
  }

  public navigateContact(): void {
    if (this.currentIndex === 3) {
      return;
    }
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.currentIndex = 3;
    }, 500);
  }
}
