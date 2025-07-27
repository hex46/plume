import { EventType } from "@/components/ThemeSwitcher/core/EventType.ts";
import type { EventPort } from "@/components/ThemeSwitcher/core/port/EventPort.ts";
import PageAdaptor from "@/components/ThemeSwitcher/infrastructure/PageAdaptor.ts";

export default class EventHandler implements EventPort {
  private readonly pageAdaptor: PageAdaptor;

  constructor(pageAdaptor: PageAdaptor) {
    this.pageAdaptor = pageAdaptor;
  }

  public addEventOn(
    element: EventType,
    callback: (event: Event) => void,
  ): void {
    switch (element) {
      case EventType.LOAD_PAGE:
        this.addEventListenerOnPageLoad(callback);
        break;
      case EventType.CHANGE_THEME:
        this.addEventListenerOnSelect(callback);
        break;
      default:
        throw new Error("Unknown element");
    }
  }

  private addEventListenerOnPageLoad(callback: (event: Event) => void) {
    window.addEventListener("load", callback);
  }

  private addEventListenerOnSelect(callback: (event: Event) => void) {
    this.pageAdaptor.getSelectElement().addEventListener("input", callback);
  }
}
