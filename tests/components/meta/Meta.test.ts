import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
// @ts-ignore
import Meta from "@/components/meta/Meta.astro";

describe("Meta", () => {
  test("should display charset", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Meta);

    const charsetRegex = /<meta charset="UTF-8">/;
    expect(result).toMatch(charsetRegex);
  });

  test("should display viewport", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Meta);

    const viewportRegex = /<meta name="viewport" content="width=device-width">/;
    expect(result).toMatch(viewportRegex);
  });

  test("should display generator", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Meta);

    const generatorRegex =
      /<meta name="generator" content="Astro v\d+\.\d+\.\d+">/;
    expect(result).toMatch(generatorRegex);
  });

  test("should not display description", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Meta);

    const descriptionRegex = /<meta name="description"/;
    expect(result).not.toMatch(descriptionRegex);
  });

  test("should display description", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Meta, {
      props: {
        description: "Hello there!",
      },
    });

    const descriptionRegex = /<meta name="description" content="Hello there!">/;
    expect(result).toMatch(descriptionRegex);
  });
});
