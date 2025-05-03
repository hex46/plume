import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it, test } from "vitest";
// @ts-ignore
import Card from "@/components/Card.astro";

describe("Card", () => {
  test("should display title, url and description", async () => {
    const title = "Link";
    const url = "/blog";
    const description = "Description";

    const container = await AstroContainer.create();
    const result = await container.renderToString(Card, {
      props: {
        title,
        url,
        description,
      },
    });

    expect(result).toContain(title);
    expect(result).toContain(`href="${url}"`);
    expect(result).toContain(description);
  });

  it.each([undefined, false])(
    "should not display 'Archived' if 'archived' is %s ",
    async (archivedValue) => {
      const title = "Link";
      const url = "/blog";
      const description = "Description";

      const container = await AstroContainer.create();
      const result = await container.renderToString(Card, {
        props: {
          title,
          url,
          description,
          archived: archivedValue,
        },
      });

      expect(result).not.toContain("Archived");
    },
  );

  test("should display 'Archived' if 'archived' is true", async () => {
    const title = "Link";
    const url = "/blog";
    const description = "Description";

    const container = await AstroContainer.create();
    const result = await container.renderToString(Card, {
      props: {
        title,
        url,
        description,
        archived: true,
      },
    });

    expect(result).toContain("Archived");
  });

  test("should NOT display 'date' if 'Date' is undefined", async () => {
    const title = "Link";
    const url = "/blog";
    const description = "Description";

    const container = await AstroContainer.create();
    const result = await container.renderToString(Card, {
      props: {
        title,
        url,
        description,
        date: undefined,
      },
    });

    expect(result).not.toMatch(/[0-9]{1,2}\/[0-9]{1,2}\/\d{4}/);
  });

  test("should display 'date' if 'Date' is not undefined", async () => {
    const title = "Link";
    const url = "/blog";
    const description = "Description";
    const dateAsString = "01/01/2025";

    const [month, day, year] = dateAsString.split("/");
    const date = new Date(+year, +month - 1, +day);

    const container = await AstroContainer.create();
    const result = await container.renderToString(Card, {
      props: {
        title,
        url,
        description,
        date: date,
      },
    });

    expect(result).toContain(dateAsString);
  });
});
