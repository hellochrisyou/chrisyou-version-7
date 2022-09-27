import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { BaseAnimate } from 'src/app/animations/base-animate';
import { RoutingStateService } from 'src/app/core/service/routing-state.service';
import { VersionDetails } from 'src/app/shared/models/interface';

@Component({
  selector: 'website-metrics',
  templateUrl: './website-metrics.component.html',
  styleUrls: ['./website-metrics.component.scss']
})
export class WebsiteMetricsComponent extends BaseAnimate implements OnInit {

  currentTab = 0;
  @ViewChild("metricsTab", { static: false }) demo3Tab: MatTabGroup;

  constructor(
    protected override routingStateService: RoutingStateService,
    public dialogRef: MatDialogRef<WebsiteMetricsComponent>,
  ) {
    super(
      routingStateService
    )
  }

  ngOnInit(): void {

  }

  navigateTab(index: number) {
    const tabGroup = this.demo3Tab;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;

    const tabCount = tabGroup._tabs.length;
    tabGroup.selectedIndex = index;
  }
}
