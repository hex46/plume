import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
// @ts-ignore
import Footer from "../../src/components/footer/Footer.astro";

describe("Footer", () => {
  test("should display fallback if slot is undefined", async () => {
    const fallback = "This is my fallback content. Please, add content in";
    const fallbackMarkdownPathIndication = "src/content/components/footer.md";

    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    expect(result).toContain(fallback);
    expect(result).toContain(fallbackMarkdownPathIndication);
  });

  test("should display content", async () => {
    const slotContent = "<p>Hello World</p>";

    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer, {
      slots: {
        default: slotContent,
      },
    });

    expect(result).toContain(slotContent);
  });
});
