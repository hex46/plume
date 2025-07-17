import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export class LocalStorageAdaptor {
  private readonly key = "theme";

  get(): Theme {
    return (localStorage.getItem(this.key) as Theme) || Theme.UNKNOWN;
  }

  set(theme: Theme): void {
    localStorage.setItem(this.key, theme);
  }
}
