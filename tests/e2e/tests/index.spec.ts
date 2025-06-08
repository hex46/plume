import { test } from "@playwright/test";
import { PlumePage } from "@e2e/pages/PlumePage.ts";

test.describe("Index", () => {
  test("has latest post", async ({ page }) => {
    const indexPage = new PlumePage(page);
    await indexPage.toHome();

    await indexPage.hasArticle(1);
  });
});
