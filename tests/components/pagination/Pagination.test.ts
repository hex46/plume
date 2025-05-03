import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
// @ts-ignore
import Pagination from "@/components/pagination/Pagination.astro";
import type { Page } from "astro";

describe("Pagination", () => {
  test("should not display pagination when the number of displayed items is equal to the total number of items", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Pagination, {
      props: {
        page: {
          size: 5,
          total: 5,
        } as unknown as Page,
      },
    });

    expect(result).not.toContain("div");
  });

  test("should display pagination when the number of displayed items is lower than the total number of items", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Pagination, {
      props: {
        page: {
          size: 5,
          total: 10,
          url: {
            first: "http://example.com/first",
            last: "http://example.com/last",
            prev: "http://example.com/prev",
            next: "http://example.com/next",
            current: 1,
          },
        } as unknown as Page,
      },
    });

    expect(result).toContain("div");
  });
});
