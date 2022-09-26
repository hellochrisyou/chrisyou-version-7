import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingStateService } from './core/service/routing-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public routingStateService: RoutingStateService
  ) {
  }
}
