import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
// @ts-ignore
import OpenGraph from "../../../src/components/meta/OpenGraph.astro";

describe("OpenGraph", () => {
  test("should display og:title", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph, {
      props: {
        title: "Hello there!",
      },
    });

    const ogTitleRegex = /<meta property="og:title" content="Hello there!">/;
    expect(result).toMatch(ogTitleRegex);
  });

  test("should display default value for og:type", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph);

    const ogTypeRegex = /<meta property="og:type" content="website">/;
    expect(result).toMatch(ogTypeRegex);
  });

  test("should display og:type is value is given", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph, {
      props: {
        type: "article",
      },
    });

    const ogTypeRegex = /<meta property="og:type" content="article">/;
    expect(result).toMatch(ogTypeRegex);
  });

  test("should display url value for og:url", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph, {
      request: new Request("https://example.com/"),
    });

    const ogUrlRegex =
      /<meta property="og:url" content="https:\/\/example.com\/">/;
    expect(result).toMatch(ogUrlRegex);
  });

  test("should not display og:description if the value is not given", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph);

    const ogDescriptionRegex = /<meta property="og:description" /;
    expect(result).not.toMatch(ogDescriptionRegex);
  });

  test("should display og:description if the value is given", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph, {
      props: {
        description: "Hello there!",
      },
    });

    const ogDescriptionRegex =
      /<meta property="og:description" content="Hello there!">/;
    expect(result).toMatch(ogDescriptionRegex);
  });

  test("should not display og:image if the value is not given", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph);

    const ogImageRegex = /<meta property="og:image" /;
    expect(result).not.toMatch(ogImageRegex);
  });

  test("should display og:image if the value is given", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(OpenGraph, {
      props: {
        image: "https://foo.bar/image.png",
      },
    });

    const ogImageRegex =
      /<meta property="og:image" content="https:\/\/foo.bar\/image.png">/;
    expect(result).toMatch(ogImageRegex);
  });
});
