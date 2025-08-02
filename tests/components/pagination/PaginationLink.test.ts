import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
// @ts-ignore
import PaginationLink from "../../../src/components/pagination/PaginationLink.astro";

describe("PaginationLink", () => {
  test('should not show link when "link" prop is undefined', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(PaginationLink);

    expect(result).not.toContain("</a>");
  });

  test('should show label when "link" prop is undefined', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(PaginationLink, {
      props: {
        label: "Hello there!",
      },
    });

    expect(result).toContain("Hello there!");
  });

  test('should show link when "link" prop is defined', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(PaginationLink, {
      props: {
        link: "http://example.com",
        label: "Hello there!",
      },
    });

    expect(result).toContain('href="http://example.com"');
  });

  test('should show label when "link" prop is defined', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(PaginationLink, {
      props: {
        link: "http://example.com",
        label: "Hello there!",
      },
    });

    expect(result).toContain("Hello there!");
  });
});
