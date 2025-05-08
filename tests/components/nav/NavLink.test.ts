import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
// @ts-ignore
import NavLink from "@/components/nav/NavLink.astro";
import type { NavElement } from "@/types/Card.ts";

describe("NavLink", () => {
  test("should display link", async () => {
    const item = {
      title: "Link",
      url: "https://example.com/",
    } as NavElement;

    const container = await AstroContainer.create();
    const result = await container.renderToString(NavLink, {
      props: {
        item,
      },
    });

    expect(result).toContain(item.title);
    expect(result).toContain(`href="${item.url}"`);
  });

  test("should display an active link if the current page URL matches", async () => {
    const item = {
      title: "Link",
      url: "/blog",
    } as NavElement;

    const container = await AstroContainer.create();
    const result = await container.renderToString(NavLink, {
      props: {
        item,
      },
      request: new Request("https://example.com/blog"),
    });

    expect(result).toContain('class="active"');
  });

  test("should NOT display an active link if the current page URL doesn't matches", async () => {
    const item = {
      title: "Link",
      url: "/blog",
    } as NavElement;

    const container = await AstroContainer.create();
    const result = await container.renderToString(NavLink, {
      props: {
        item,
      },
      request: new Request("https://example.com/"),
    });

    expect(result).not.toContain('class="active"');
  });
});
