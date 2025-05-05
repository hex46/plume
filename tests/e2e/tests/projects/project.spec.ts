import { test } from "@playwright/test";
import { PlumePage } from "@e2e/pages/PlumePage.ts";

test.describe("projects", () => {
  let projectPage: PlumePage;

  test.beforeEach(async ({ page }) => {
    projectPage = new PlumePage(page);
    await projectPage.to("/projects");
  });

  test("has 2 projects", async () => {
    await projectPage.hasArticle(2);
  });

  test("navigate to first project", async () => {
    await projectPage.clickOnLink("Lorem Ipsum - 0");
    await projectPage.hasUrl("/projects/lorem_ipsum_0");
  });
});
