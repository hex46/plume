import { describe, vi, expect, beforeEach, it } from "vitest";

import { ColorScheme } from "@/components/theme-switcher/core/ColorScheme.ts";
import PageAdaptor from "@/components/theme-switcher/infrastructure/PageAdaptor.ts";

describe("PageAdaptor", () => {
  const optionDark = document.createElement("option");
  optionDark.setAttribute("value", ColorScheme.DARK.valueOf());

  const optionLight = document.createElement("option");
  optionLight.setAttribute("value", ColorScheme.LIGHT.valueOf());

  const optionSystem = document.createElement("option");
  optionSystem.setAttribute("value", ColorScheme.SYSTEM.valueOf());

  const selectElement = document.createElement("select");
  selectElement.setAttribute("id", "selectId");
  selectElement.style.display = "none";

  const labelElement = document.createElement("label");
  selectElement.append(optionDark, optionLight, optionSystem);
  selectElement.style.display = "none";

  vi.spyOn(document, "getElementById").mockReturnValue(selectElement);
  vi.spyOn(document, "querySelector").mockReturnValue(labelElement);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should change select value", () => {
    const pageAdaptor = new PageAdaptor("selectId");

    pageAdaptor.setPageTheme(ColorScheme.DARK);

    expect(selectElement.value).eq(ColorScheme.DARK.valueOf());
  });

  it("should change select and label display", () => {
    const pageAdaptor = new PageAdaptor("selectId");

    pageAdaptor.showElementsIfJavascriptIsActive();

    expect(selectElement.style.display).eq("block");
    expect(labelElement.style.display).eq("block");
  });

  it("should return expected select", () => {
    const pageAdaptor = new PageAdaptor("selectId");

    const currentSelectElement = pageAdaptor.getSelectElement();

    expect(currentSelectElement).eq(selectElement);
  });
});
