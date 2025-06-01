import type { StoragePort } from "@/components/ThemeSwitcher/port/StoragePort.ts";
import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export class LocalStorageAdaptor implements StoragePort {
  private readonly key = "theme";

  get(): Theme | null {
    return localStorage.getItem(this.key) as Theme;
  }

  set(theme: Theme): void {
    localStorage.setItem(this.key, theme);
  }
}
