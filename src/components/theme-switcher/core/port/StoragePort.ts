import { ColorScheme } from "@/components/theme-switcher/core/ColorScheme.ts";

export interface StoragePort {
  get(): ColorScheme;
  set(theme: ColorScheme): void;
}
