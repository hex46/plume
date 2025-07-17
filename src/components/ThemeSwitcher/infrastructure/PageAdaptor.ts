import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export class PageAdaptor {
  setPageTheme(theme: Theme): void {
    const selectInput = document.querySelector(
      "#color-scheme",
    ) as HTMLSelectElement;
    selectInput.value = theme.valueOf();
  }

  getInputSelect = (): HTMLSelectElement => {
    return document.querySelector("#color-scheme") as HTMLSelectElement;
  };
}
