import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it, test } from "vitest";
// @ts-ignore
import Header from "@/components/Header.astro";

describe("Header", () => {
  test("should display fallback if slot is undefined", async () => {
    const fallback = "This is my fallback content. Please, add content in";
    const fallbackMarkdownPathIndication = "src/content/components/header.md";

    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    expect(result).toContain(fallback);
    expect(result).toContain(fallbackMarkdownPathIndication);
  });

  test("should display content", async () => {
    const slotContent = "<p>Hello World</p>";

    const container = await AstroContainer.create();
    const result = await container.renderToString(Header, {
      slots: {
        default: slotContent,
      },
    });

    expect(result).toContain(slotContent);
  });
});
