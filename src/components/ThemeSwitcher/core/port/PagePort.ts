import { ColorScheme } from "@/components/ThemeSwitcher/core/ColorScheme.ts";

export default interface PagePort {
  setPageTheme(theme: ColorScheme): void;
  showElementsIfJavascriptIsActive(): void;
}
