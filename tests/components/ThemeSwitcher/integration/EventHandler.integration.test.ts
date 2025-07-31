import { describe, vi, expect, beforeEach, it } from "vitest";

import EventHandler from "@/components/ThemeSwitcher/infrastructure/EventHandler.ts";
import type PagePort from "@/components/ThemeSwitcher/core/port/PagePort.ts";
import { EventType } from "@/components/ThemeSwitcher/core/EventType.ts";

describe("EventHandler", () => {
  const selectElement = document.createElement("select");
  const selectSpy = vi.spyOn(selectElement, "addEventListener");
  const addEventListenerSpy = vi.spyOn(window, "addEventListener");

  const pageMock = {
    setPageTheme: vi.fn(),
    showElementsIfJavascriptIsActive: vi.fn(),
    getSelectElement: vi.fn(() => selectElement),
  } as PagePort;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should add load event listener", () => {
    const eventHandler = new EventHandler(pageMock);
    const mockedFunction = vi.fn();

    eventHandler.addEventOn(EventType.LOAD_PAGE, mockedFunction);

    expect(addEventListenerSpy).toHaveBeenCalledWith("load", mockedFunction);
  });

  it("should call function when a load event is trigger", () => {
    const eventHandler = new EventHandler(pageMock);
    const mockedFunction = vi.fn();

    eventHandler.addEventOn(EventType.LOAD_PAGE, mockedFunction);
    window.dispatchEvent(new Event("load"));

    expect(mockedFunction).toHaveBeenCalled();
  });

  it("should add change theme event listener", () => {
    const eventHandler = new EventHandler(pageMock);
    const mockedFunction = vi.fn();

    eventHandler.addEventOn(EventType.CHANGE_THEME, mockedFunction);

    expect(selectSpy).toHaveBeenCalledWith("input", mockedFunction);
  });

  it("should call function when a input event is trigger", () => {
    const eventHandler = new EventHandler(pageMock);
    const mockedFunction = vi.fn();

    eventHandler.addEventOn(EventType.CHANGE_THEME, mockedFunction);
    selectElement.dispatchEvent(new Event("input"));

    expect(mockedFunction).toHaveBeenCalled();
  });
});
