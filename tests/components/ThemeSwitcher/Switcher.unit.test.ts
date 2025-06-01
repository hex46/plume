import { describe, vi, test, expect, beforeEach } from "vitest";

import { Switcher } from "@/components/ThemeSwitcher/core/Switcher.ts";
import type { StoragePort } from "@/components/ThemeSwitcher/port/StoragePort.ts";
import type { PagePort } from "@/components/ThemeSwitcher/port/PagePort.ts";
import { Theme } from "@/components/ThemeSwitcher/core/Theme.ts";

const storageMock = {
  set: vi.fn(),
  get: vi.fn(() => Theme.LIGHT),
} as StoragePort;

const pageMock = {
  set: vi.fn(),
} as PagePort;

describe("Switcher", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should get default theme", async () => {
    const switcher = new Switcher(storageMock, pageMock, Theme.LIGHT);
    const currentTheme: Theme = switcher.getCurrent();
    expect(currentTheme).toBe(Theme.LIGHT);
  });

  test("should change theme", async () => {
    const switcher = new Switcher(storageMock, pageMock, Theme.LIGHT);
    switcher.change();
    const current = switcher.getCurrent();
    expect(current).toBe(Theme.DARK);
  });

  test("should initialize from storage", async () => {
    new Switcher(storageMock, pageMock, Theme.LIGHT);
    expect(storageMock.get).toHaveBeenCalled();
  });

  test("should initialize page theme", async () => {
    new Switcher(storageMock, pageMock, Theme.LIGHT);
    expect(pageMock.set).toHaveBeenCalled();
  });

  test("should change theme and save with storage", async () => {
    const switcher = new Switcher(storageMock, pageMock, Theme.LIGHT);
    switcher.change();
    expect(storageMock.set).toHaveBeenCalledTimes(1);
  });

  test("should change theme and update page", async () => {
    const switcher = new Switcher(storageMock, pageMock, Theme.LIGHT);
    switcher.change();

    const initializeAndUpdate = 2;
    expect(pageMock.set).toHaveBeenCalledTimes(initializeAndUpdate);
  });
});
