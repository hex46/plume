import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export class PageAdaptor {
  private readonly inputSelector = "color-scheme";

  constructor() {
    this.showElementsIfJavascriptIsActive();
  }

  setPageTheme(theme: Theme): void {
    const selectInput = this.getSelectInput();
    selectInput.value = theme.valueOf();
  }

  addEventListener = (callback: (event: Event) => void) => {
    const selectInput = this.getSelectInput();
    selectInput.addEventListener("input", callback);
  };

  private showElementsIfJavascriptIsActive() {
    const elementToDisplay = [this.getSelectInput(), this.getLabel()];
    elementToDisplay.forEach((element) => {
      this.showElement(element);
    });
  }

  private getSelectInput() {
    return document.getElementById(this.inputSelector) as HTMLSelectElement;
  }

  private getLabel() {
    return document.querySelector<HTMLElement>(
      `label[for='${this.inputSelector}']`,
    );
  }

  private showElement(selectInput: HTMLElement | null) {
    if (selectInput) selectInput.style.display = "block";
  }
}
