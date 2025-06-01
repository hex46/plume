import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export interface StoragePort {
  set(theme: Theme): void;

  get(): Theme | null;
}
