import { test, expect } from "@playwright/test";

test.describe("blog posts", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  test("has 2 blog posts", async ({ page }) => {
    expect(await page.getByRole("article").count()).toBe(2);
  });

  test("navigate to first blog post", async ({ page }) => {
    const firstBlogPostLink = page.getByRole("link", {
      name: "Lorem Ipsum - 15",
    });
    await firstBlogPostLink.click();
    await page.waitForURL("blog/lorem_ipsum_15");
  });
});
