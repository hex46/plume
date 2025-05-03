import { test, expect } from "@playwright/test";

test.describe("Pages structure", () => {
  const pages = [
    { pageName: "Home", title: "Hello there", url: "/" },
    { pageName: "Blog", title: "Blog", url: "/blog" },
    { pageName: "Projects", title: "Projects", url: "/projects" },
    { pageName: "Talks", title: "Talks", url: "/talks" },
    { pageName: "About", title: "About", url: "/about" },
  ];

  pages.forEach(({ pageName, title, url }) => {
    test.describe(pageName, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(url);
      });

      test("has title", async ({ page }) => {
        await expect(page).toHaveTitle(title);
      });

      test("has header", async ({ page }) => {
        await expect(page.getByRole("banner")).toBeVisible();
      });

      test("has navigation", async ({ page }) => {
        await expect(page.getByRole("navigation")).toBeVisible();
      });

      test("has h1", async ({ page }) => {
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      });

      test("has footer", async ({ page }) => {
        await expect(page.getByRole("contentinfo")).toBeVisible();
      });
    });
  });
});
