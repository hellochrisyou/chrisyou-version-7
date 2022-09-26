import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseAnimate } from 'src/app/animations/base-animate';
import { RoutingStateService } from 'src/app/core/service/routing-state.service';



@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent extends BaseAnimate implements OnInit {

  isToggleAuction = false;
  isToggleStock = false;
  isToggleDating = false;
  isToggleCapitalOne = false;

  constructor(protected override routingStateService: RoutingStateService, public dialog: MatDialog) { super(routingStateService) }

  ngOnInit(): void {
  }

  public displayToggleAuction(): string {
    if (this.isToggleAuction === false) {
      return "Click to see Project Details";
    } else {
      return "Click to see Infrastructure Diagram";
    }
  }

  public displayToggleStock(): string {
    if (this.isToggleStock === false) {
      return "Click to see Project Details";
    } else {
      return "Click to see Infrastructure Diagram";
    }
  }

  public displayToggleDating(): string {
    if (this.isToggleDating === false) {
      return "Click to see Project Details";
    } else {
      return "Click to see Infrastructure Diagram";
    }
  }

  public displayToggleCapitalOne(): string {
    if (this.isToggleCapitalOne === false) {
      return "Click to see Project Details";
    } else {
      return "Click to see code with Stackblitz.com (embedded)";
    }
  }

  public setProjectIndexCapitalOne() {
    if (this.isToggleCapitalOne === false) {
      return 0;
    } else {
      return 1;
    }
  }

  public setProjectIndexAuction() {
    if (this.isToggleAuction === false) {
      return 0;
    } else {
      return 1;
    }
  }

  public setProjectIndexStock() {
    if (this.isToggleStock === false) {
      return 0;
    } else {
      return 1;
    }
  }

  public setProjectIndexDating() {
    if (this.isToggleDating === false) {
      return 0;
    } else {
      return 1;
    }
  }

  public toggleSlideCapitalOne() {
    this.isToggleCapitalOne = !this.isToggleCapitalOne;
  }

  public toggleSlideAuction() {
    this.isToggleAuction = !this.isToggleAuction;
  }

  public toggleSlideStock() {
    this.isToggleStock = !this.isToggleStock;
  }

  public toggleSlideDating() {
    this.isToggleDating = !this.isToggleDating;
  }
}
