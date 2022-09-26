import { Component, OnInit } from '@angular/core';
import { BaseAnimate } from 'src/app/animations/base-animate';
import { RoutingStateService } from 'src/app/core/service/routing-state.service';
declare var $: any;

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent extends BaseAnimate implements OnInit {
  constructor(protected override routingStateService: RoutingStateService) { super(routingStateService) }
  slideElements = ['.back__slide', '.card__slide', '.content__slide'];
  inProgress = false;
  ngOnInit() {
    const goToSlide = (slideElements: any, index: any) => {
      if (!this.inProgress) {
        this.inProgress = true;

        $('.active').addClass('exit');
        $('.active').removeClass('active');
        slideElements.forEach((elem: any) => {
          $(`${elem}:nth-child(${index})`).addClass('active');
        });

        const evenSlide = index % 2 === 0;
        if (evenSlide) {
          $('.content__ping').addClass('content__ping--right');
        } else {
          $('.content__ping').removeClass('content__ping--right');
        }
        $('.content__ping--noanimation').removeClass('content__ping--noanimation');

        setTimeout(() => $('.exit').removeClass('exit'), 1000);
        setTimeout(() => (this.inProgress = false), 2000);
      }
    };

    $('.content__slide:nth-child(1) .button').on('click', () => goToSlide(this.slideElements, 2));
    $('.content__slide:nth-child(2) .button').on('click', () => goToSlide(this.slideElements, 1));

    setTimeout(() => goToSlide(this.slideElements, 2), 2000);
    // setTimeout(() => goToSlide(this.slideElements, 1), 8000);
  }
}
