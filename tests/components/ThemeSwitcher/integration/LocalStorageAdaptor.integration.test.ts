import { describe, expect, beforeEach, it } from "vitest";

import { ColorScheme } from "@/components/theme-switcher/core/ColorScheme.ts";
import LocalStorageAdaptor from "@/components/theme-switcher/infrastructure/LocalStorageAdaptor.ts";

describe("LocalStorageAdaptor", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should get theme", () => {
    const expectedColorScheme = ColorScheme.DARK;
    localStorage.setItem("theme", expectedColorScheme);

    const adaptor = new LocalStorageAdaptor();
    const colorScheme = adaptor.get();

    expect(colorScheme).eq(expectedColorScheme);
  });

  it("should set theme", () => {
    const expectedColorScheme = ColorScheme.DARK;

    const adaptor = new LocalStorageAdaptor();
    adaptor.set(expectedColorScheme);

    const currentTheme = localStorage.getItem("theme") as ColorScheme;
    expect(currentTheme).eq(expectedColorScheme);
  });
});
