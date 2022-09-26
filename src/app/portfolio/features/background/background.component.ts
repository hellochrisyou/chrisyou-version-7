import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var Swiper: any
@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BackgroundComponent implements OnInit, AfterViewInit {
  timelineSwiper: any;
  constructor() {

  }
  ngAfterViewInit(): void {
    this.timelineSwiper = new Swiper(".timeline .swiper-container", {
      direction: "vertical",
      loop: false,
      speed: 1600,
      pagination: ".swiper-pagination",
      paginationBulletRender: function (swiper: any, index: any, className: any) {
        var year = document
          .querySelectorAll(".swiper-slide")
        [index].getAttribute("data-year");
        return '<span class="' + className + '">' + year + "</span>";
      },
      paginationClickable: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      breakpoints: {
        768: {
          direction: "horizontal"
        }
      }
    });

  }

  ngOnInit(): void {
  }

}
