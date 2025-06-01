import type { PagePort } from "@/components/ThemeSwitcher/port/PagePort.ts";
import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

export class PageAdaptor implements PagePort {
  set(theme: Theme): void {
    const body = document.body;
    this.removeCurrentTheme(body);
    this.updateTheme(body, theme);
  }

  private removeCurrentTheme(body: HTMLElement) {
    const themesAsStrings = Object.values(Theme).map((t) => t.valueOf());
    body.classList.remove(...themesAsStrings);
  }

  private updateTheme(body: HTMLElement, theme: Theme) {
    body.classList.add(theme);
  }
}
