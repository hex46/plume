import { ColorScheme } from "@/components/ThemeSwitcher/core/ColorScheme.ts";

export interface StoragePort {
  get(): ColorScheme;
  set(theme: ColorScheme): void;
}
