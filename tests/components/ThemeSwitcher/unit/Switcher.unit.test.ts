import { describe, vi, test, expect, beforeEach } from "vitest";

import { ColorScheme } from "@/components/theme-switcher/core/ColorScheme.ts";
import Switcher from "@/components/theme-switcher/core/Switcher.ts";
import type { StoragePort } from "@/components/theme-switcher/core/port/StoragePort.ts";
import type PagePort from "@/components/theme-switcher/core/port/PagePort.ts";
import type { EventPort } from "@/components/theme-switcher/core/port/EventPort.ts";
import { EventType } from "@/components/theme-switcher/core/EventType.ts";

const storageMock = {
  set: vi.fn(),
  get: vi.fn(() => ColorScheme.LIGHT),
} as StoragePort;

const pageMock = {
  setPageTheme: vi.fn(),
  showElementsIfJavascriptIsActive: vi.fn(),
  getSelectElement: vi.fn(),
} as PagePort;

const eventHandlerMock = {
  addEventOn: vi.fn(),
} as EventPort;

describe("Switcher", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("initialize event listener", () => {
    test("should initialize on load page event", async () => {
      const switcher = new Switcher(storageMock, pageMock, eventHandlerMock);
      switcher.initializeEventListeners();

      expect(eventHandlerMock.addEventOn).toHaveBeenCalledWith(
        EventType.LOAD_PAGE,
        expect.any(Function),
      );
    });

    test("should initialize on change theme event", async () => {
      const switcher = new Switcher(storageMock, pageMock, eventHandlerMock);
      switcher.initializeEventListeners();

      expect(eventHandlerMock.addEventOn).toHaveBeenCalledWith(
        EventType.CHANGE_THEME,
        expect.any(Function),
      );
    });
  });
});
