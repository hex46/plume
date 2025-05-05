import { test } from "@playwright/test";
import { PlumePage } from "@e2e/pages/PlumePage.ts";

test.describe("blog", () => {
  let blogPage: PlumePage;

  test.beforeEach(async ({ page }) => {
    blogPage = new PlumePage(page);
    await blogPage.to("/blog");
  });

  test("has 2 posts", async () => {
    await blogPage.hasArticle(2);
  });

  test("navigate to first post", async () => {
    await blogPage.clickOnLink("Lorem Ipsum - 15");
    await blogPage.hasUrl("/blog/lorem_ipsum_15");
  });
});
