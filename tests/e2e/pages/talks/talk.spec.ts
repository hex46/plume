import { test, expect } from "@playwright/test";

test.describe("talks", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/talks");
  });

  test("has 2 talkss", async ({ page }) => {
    expect(await page.getByRole("article").count()).toBe(2);
  });

  test("navigate to first talks", async ({ page }) => {
    const firstBlogPostLink = page.getByRole("link", {
      name: "Lorem Ipsum - 0",
    });
    await firstBlogPostLink.click();
    await page.waitForURL("/talks/lorem_ipsum_0");
  });
});
