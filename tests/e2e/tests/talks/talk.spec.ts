import { test } from "@playwright/test";
import { PlumePage } from "../../pages/PlumePage.ts";

test.describe("talks", () => {
  let talksPage: PlumePage;

  test.beforeEach(async ({ page }) => {
    talksPage = new PlumePage(page);
    await talksPage.to("/talks");
  });

  test("has 2 talks", async () => {
    await talksPage.hasArticle(2);
  });

  test("navigate to first talks", async () => {
    await talksPage.clickOnLink("Lorem Ipsum - 0");
    await talksPage.hasUrl("/talks/lorem_ipsum_0");
  });
});
