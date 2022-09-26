import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseAnimate } from 'src/app/animations/base-animate';
import { RoutingStateService } from 'src/app/core/service/routing-state.service';
import { VersionDetails, VersionDialogData } from 'src/app/shared/models/interface';
import { HYDRATE_VERSION_DETAILS_CARD, HYDRATE_VERSION_PIE_DATA } from './util/hydrate-version-details-card.util';

@Component({
  selector: 'version-card-details',
  templateUrl: './version-details-card.component.html',
  styleUrls: ['./version-details-card.component.scss']
})
export class VersionCardDetailsComponent extends BaseAnimate implements OnInit {

  currentVersionDetailsCard: VersionDetails = {};

  options: any;
  chartData: any[] = [];


  constructor(
    protected override routingStateService: RoutingStateService,
    public dialogRef: MatDialogRef<VersionCardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VersionDialogData
  ) {
    super(routingStateService
    )
  }

  ngOnInit(): void {
    this.setData();
    this.currentVersionDetailsCard = HYDRATE_VERSION_DETAILS_CARD(this.data.versionNum);
    this.setOptions();
  }

  setOptions(): void {
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%',
      },
      series: [
        {
          type: 'pie',
          radius: '47.5%',
          data: this.chartData.sort((a, b) => a.value - b.value),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: () => Math.random() * 200,
        }
      ]
    };
  }

  setData(): void {
    this.chartData = HYDRATE_VERSION_PIE_DATA(this.data.versionNum);
  }

}
