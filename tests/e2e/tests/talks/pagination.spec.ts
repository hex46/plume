import { test } from "@playwright/test";
import { PlumePage } from "../../pages/PlumePage.ts";

test.describe("talks pagination", () => {
  let talksPage: PlumePage;

  test.beforeEach(async ({ page }) => {
    talksPage = new PlumePage(page);
    await talksPage.to("/talks");
  });

  test("pagination is absent", async () => {
    await talksPage.pagination.doesntExist();
  });
});
