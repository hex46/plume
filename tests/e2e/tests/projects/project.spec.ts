import { test, expect } from "@playwright/test";

test.describe("projects", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects");
  });

  test("has 2 projects", async ({ page }) => {
    expect(await page.getByRole("article").count()).toBe(2);
  });

  test("navigate to first project", async ({ page }) => {
    const firstBlogPostLink = page.getByRole("link", {
      name: "Lorem Ipsum - 0",
    });
    await firstBlogPostLink.click();
    await page.waitForURL("/projects/lorem_ipsum_0");
  });
});
