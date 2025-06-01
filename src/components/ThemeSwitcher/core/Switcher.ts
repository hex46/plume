import type { StoragePort } from "@/components/ThemeSwitcher/port/StoragePort.ts";
import type { PagePort } from "@/components/ThemeSwitcher/port/PagePort.ts";
import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export class Switcher {
  private storage: StoragePort;
  private page: PagePort;
  private theme: Theme;

  public constructor(
    storage: StoragePort,
    page: PagePort,
    defaultTheme: Theme,
  ) {
    this.storage = storage;
    this.page = page;
    this.theme = this.storage.get() || defaultTheme;

    this.page.set(this.theme);
  }

  public getCurrent(): Theme {
    return this.theme;
  }

  public change() {
    const newTheme = this.inverse(this.theme);
    this.page.set(newTheme);
    this.storage.set(newTheme);
    this.theme = newTheme;
  }

  private inverse(theme: Theme): Theme {
    if (theme === Theme.LIGHT) return Theme.DARK;
    return Theme.LIGHT;
  }
}
