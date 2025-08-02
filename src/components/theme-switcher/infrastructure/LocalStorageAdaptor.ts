import { ColorScheme } from "@/components/theme-switcher/core/ColorScheme.ts";
import type { StoragePort } from "@/components/theme-switcher/core/port/StoragePort.ts";

export default class LocalStorageAdaptor implements StoragePort {
  private readonly key = "theme";

  public get(): ColorScheme {
    return (
      (localStorage.getItem(this.key) as ColorScheme) || ColorScheme.UNKNOWN
    );
  }

  public set(theme: ColorScheme): void {
    localStorage.setItem(this.key, theme);
  }
}
