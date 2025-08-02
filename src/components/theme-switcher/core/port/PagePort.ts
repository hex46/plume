import { ColorScheme } from "@/components/theme-switcher/core/ColorScheme.ts";

export default interface PagePort {
  setPageTheme(theme: ColorScheme): void;
  showElementsIfJavascriptIsActive(): void;
  getSelectElement(): HTMLSelectElement;
}
