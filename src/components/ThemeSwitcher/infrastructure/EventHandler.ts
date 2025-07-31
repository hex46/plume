import { EventType } from "@/components/ThemeSwitcher/core/EventType.ts";
import type { EventPort } from "@/components/ThemeSwitcher/core/port/EventPort.ts";
import type PagePort from "@/components/ThemeSwitcher/core/port/PagePort.ts";

export default class EventHandler implements EventPort {
  private readonly pagePort: PagePort;

  constructor(pageAdaptor: PagePort) {
    this.pagePort = pageAdaptor;
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
    this.pagePort.getSelectElement().addEventListener("input", callback);
  }
}
