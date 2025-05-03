import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  test.describe("posts", () => {
    test("has 2 blog posts", async ({ page }) => {
      expect(await page.getByRole("article").count()).toBe(2);
    });

    // TODO : navigate to posts
  });
  test.describe("pagination", () => {
    // TODO : navigate with pagination

    test("pagination is present", async ({ page }) => {
      await expect(
        page.getByLabel("pagination", { exact: true }),
      ).toBeVisible();
    });

    // TODO remove tests ?
    test("first element is not clickable", async ({ page }) => {
      await expect(page.getByRole("link", { name: "First" })).not.toBeVisible();
    });

    test("prev element is not clickable", async ({ page }) => {
      await expect(page.getByRole("link", { name: "Prev" })).not.toBeVisible();
    });

    test("Current page is visible", async ({ page }) => {
      await expect(page.getByText("Page 1", { exact: true })).toBeVisible();
    });

    test("Next element is clickable", async ({ page }) => {
      await expect(page.getByRole("link", { name: "Next" })).toBeVisible();
    });

    test("Last element is clickable", async ({ page }) => {
      await expect(page.getByRole("link", { name: "Last" })).toBeVisible();
    });
  });
});
