import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseAnimate } from 'src/app/animations/base-animate';
import { RoutingStateService } from 'src/app/core/service/routing-state.service';
import { VersionCardDetailsComponent } from './version-card-details/version-details-card.component';

@Component({
  selector: 'prev-version',
  templateUrl: './prev-version.component.html',
  styleUrls: ['./prev-version.component.scss']
})
export class PrevVersionComponent extends BaseAnimate implements OnInit {
  currentIndex = 0;
  constructor(
    protected override routingStateService: RoutingStateService,
    public dialog: MatDialog
    ) { super(routingStateService) }

  ngOnInit(): void {
  }

  openVersionDetailsDialog(enterAnimationDuration: string, exitAnimationDuration: string, versionNumParam: number): void {
    this.dialog.open(VersionCardDetailsComponent, {
      width: '31rem',
      panelClass: 'panel-class',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        versionNum: versionNumParam
      }
    });
  }

  public setVersionIndex(): number {
    return this.currentIndex;
  }

  public setIndex(value: number): void {
    switch (value) {
      case 0: {
        this.currentIndex = 0;
        break;
      }
      case 1: {
        this.currentIndex = 1;
        break;
      }
      case 2: {
        this.currentIndex = 2;
        break;
      }
      case 3: {
        this.currentIndex = 3;
        break;
      }
      case 4: {
        this.currentIndex = 4;
        break;
      }
    }
  }
}
