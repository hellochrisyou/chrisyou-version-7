import { RoutingStateService } from "../core/service/routing-state.service";

export abstract class BaseAnimate {
  public isFadeOut = false;

  constructor(
    protected routingStateService: RoutingStateService
  ) {
    this.routingStateService.isFadeOut$.subscribe(data => {
      this.isFadeOut = data;
    });
  }

  public toggleFadeOut() {
    this.isFadeOut = true;
  }

  public async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then();
  }
}
