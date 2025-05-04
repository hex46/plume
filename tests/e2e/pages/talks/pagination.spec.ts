import { test, expect } from "@playwright/test";

const exactMatchOption = { exact: true };

const firstPageLink = { name: "First" };
const previousPageLink = { name: "Prev" };
const nextPageLink = { name: "Next" };
const lastPageLink = { name: "Last" };

// TODO: to PageObject

test.describe("talks pagination", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/talks");
  });

  test("pagination is absent", async ({ page }) => {
    await expect(
      page.getByLabel("pagination", exactMatchOption),
    ).not.toBeVisible();
  });
});
