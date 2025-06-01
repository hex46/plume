import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export interface PagePort {
  set(theme: Theme): void;
}
