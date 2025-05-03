import { test, expect } from "@playwright/test";

const exactMatchOption = { exact: true };

const firstPageLink = { name: "First" };
const previousPageLink = { name: "Prev" };
const nextPageLink = { name: "Next" };
const lastPageLink = { name: "Last" };

// TODO: to PageObject

test.describe("blog pagination", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  test.describe("first page", () => {
    test("pagination is present", async ({ page }) => {
      await expect(
        page.getByLabel("pagination", exactMatchOption),
      ).toBeVisible();
    });

    test("first element is not clickable", async ({ page }) => {
      await expect(page.getByRole("link", firstPageLink)).not.toBeVisible();
    });

    test("prev element is not clickable", async ({ page }) => {
      await expect(page.getByRole("link", previousPageLink)).not.toBeVisible();
    });

    test("Current page is visible", async ({ page }) => {
      await expect(page.getByText("Page 1", exactMatchOption)).toBeVisible();
    });

    test("navigate to next page", async ({ page }) => {
      const nextPage = page.getByRole("link", nextPageLink);
      await nextPage.click();
      await page.waitForURL("/blog/2");
    });

    test("navigate to last page", async ({ page }) => {
      const nextPage = page.getByRole("link", lastPageLink);
      await nextPage.click();
      await page.waitForURL("/blog/8");
    });
  });

  test.describe("last page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/blog/8");
    });

    test("pagination is present", async ({ page }) => {
      await expect(
        page.getByLabel("pagination", exactMatchOption),
      ).toBeVisible();
    });

    test("navigate to first page", async ({ page }) => {
      const nextPage = page.getByRole("link", firstPageLink);
      await nextPage.click();
      await page.waitForURL("/blog/1");
    });

    test("navigate to previous page", async ({ page }) => {
      const nextPage = page.getByRole("link", previousPageLink);
      await nextPage.click();
      await page.waitForURL("/blog/7");
    });

    test("current page is visible", async ({ page }) => {
      await expect(page.getByText("Page 8", exactMatchOption)).toBeVisible();
    });

    test("next page link is not clickable", async ({ page }) => {
      await expect(page.getByRole("link", nextPageLink)).not.toBeVisible();
    });

    test("last page link is not clickable", async ({ page }) => {
      await expect(page.getByRole("link", lastPageLink)).not.toBeVisible();
    });
  });
});
