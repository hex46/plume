import { ColorScheme } from "@/components/theme-switcher/core/ColorScheme.ts";
import type PagePort from "@/components/theme-switcher/core/port/PagePort.ts";

export default class PageAdaptor implements PagePort {
  private readonly selectElement: HTMLSelectElement;
  private readonly labelElement: HTMLLabelElement;

  constructor(selectId: string) {
    let labelSelector = `label[for='${selectId}']`;

    this.selectElement = document.getElementById(selectId) as HTMLSelectElement;
    this.labelElement = document.querySelector<HTMLLabelElement>(
      labelSelector,
    ) as HTMLLabelElement;
  }

  public setPageTheme(theme: ColorScheme): void {
    this.selectElement.value = theme.valueOf();
  }

  public showElementsIfJavascriptIsActive() {
    const elementToDisplay = [this.selectElement, this.labelElement];
    elementToDisplay.forEach(this.showElement);
  }

  private showElement(selectInput: HTMLElement | null) {
    if (selectInput) selectInput.style.display = "block";
  }

  public getSelectElement() {
    return this.selectElement;
  }
}
