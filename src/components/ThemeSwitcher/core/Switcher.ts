import { ColorScheme } from "./ColorScheme.ts";
import type PagePort from "@/components/ThemeSwitcher/core/port/PagePort.ts";
import type { StoragePort } from "@/components/ThemeSwitcher/core/port/StoragePort.ts";
import { EventType } from "@/components/ThemeSwitcher/core/EventType.ts";
import type { EventPort } from "@/components/ThemeSwitcher/core/port/EventPort.ts";

export default class Switcher {
  private storage: StoragePort;
  private page: PagePort;
  private eventHandler: EventPort;

  constructor(storage: StoragePort, page: PagePort, eventHandler: EventPort) {
    this.storage = storage;
    this.page = page;
    this.eventHandler = eventHandler;
  }

  public initializeEventListeners() {
    this.eventHandler.addEventOn(EventType.LOAD_PAGE, () => this.onPageLoad());
    this.eventHandler.addEventOn(EventType.CHANGE_THEME, (event) =>
      this.switch(event),
    );
  }

  private onPageLoad() {
    this.initializeTheme();
    this.page.showElementsIfJavascriptIsActive();
  }

  private initializeTheme() {
    const theme = this.storage.get();
    if (theme !== ColorScheme.UNKNOWN) this.page.setPageTheme(theme);
  }

  private switch(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ColorScheme;
    this.storage.set(value);
    this.page.setPageTheme(value);
  }
}
