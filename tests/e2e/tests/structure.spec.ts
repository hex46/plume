import { test } from "@playwright/test";
import { PlumePage } from "@e2e/pages/PlumePage.ts";

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
      let plumePage: PlumePage;

      test.beforeEach(async ({ page }) => {
        plumePage = new PlumePage(page);
        await plumePage.to(url);
      });

      test("has title", async () => {
        await plumePage.hasTitle(title);
      });

      test("has header", async () => {
        await plumePage.hasHeader();
      });

      test("has navigation", async () => {
        await plumePage.hasNavigation();
      });

      test("has h1", async () => {
        await plumePage.hasHeadingLevel1();
      });

      test("has footer", async () => {
        await plumePage.hasFooter();
      });
    });
  });
});
