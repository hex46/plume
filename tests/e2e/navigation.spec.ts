import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("has index", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Hello there/);
  });

  [
    { pageName: "Home", title: "Hello there", url: "/" },
    { pageName: "Blog", title: "Blog", url: "/blog" },
    { pageName: "Projects", title: "Projects", url: "/projects" },
    { pageName: "Talks", title: "Talks", url: "/talks" },
    { pageName: "About", title: "About", url: "/about" },
  ].forEach(({ pageName, title, url }) => {
    test(`has ${pageName} page`, async ({ page }) => {
      await page.goto("/");

      await page.getByRole("link", { name: pageName }).click();

      await page.waitForURL(url);
      await expect(page).toHaveTitle(title);
    });
  });
});
