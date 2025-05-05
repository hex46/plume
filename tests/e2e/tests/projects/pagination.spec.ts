import { test } from "@playwright/test";
import { PlumePage } from "@e2e/pages/PlumePage.ts";
import { PaginationAction, PaginationLink } from "@e2e/pages/Pagination.ts";

test.describe("projects pagination", () => {
  let projectPage: PlumePage;
  test.beforeEach(async ({ page }) => {
    projectPage = new PlumePage(page);
    await projectPage.to("/projects");
  });

  test.describe("first page", () => {
    test("pagination is present", async () => {
      await projectPage.pagination.exists();
    });

    test("first element is not clickable", async () => {
      await projectPage.pagination
        .action(PaginationLink.FIRST)
        .is(PaginationAction.UNCLICKABLE);
    });

    test("prev element is not clickable", async () => {
      await projectPage.pagination
        .action(PaginationLink.PREVIOUS)
        .is(PaginationAction.UNCLICKABLE);
    });

    test("Current page is visible", async () => {
      await projectPage.pagination.isPage(1);
    });

    test("navigate to next page", async () => {
      await projectPage.pagination.navigate(PaginationLink.NEXT);
      await projectPage.hasUrl("/projects/2");
    });

    test("navigate to last page", async () => {
      await projectPage.pagination.navigate(PaginationLink.LAST);
      await projectPage.hasUrl("/projects/8");
    });
  });

  test.describe("last page", () => {
    test.beforeEach(async () => {
      await projectPage.to("/projects/8");
    });

    test("pagination is present", async () => {
      await projectPage.pagination.exists();
    });

    test("navigate to first page", async () => {
      await projectPage.pagination.navigate(PaginationLink.FIRST);
      await projectPage.hasUrl("/projects/1");
    });

    test("navigate to previous page", async () => {
      await projectPage.pagination.navigate(PaginationLink.PREVIOUS);
      await projectPage.hasUrl("/projects/7");
    });

    test("current page is visible", async () => {
      await projectPage.pagination.isPage(8);
    });

    test("next page link is not clickable", async () => {
      await projectPage.pagination
        .action(PaginationLink.NEXT)
        .is(PaginationAction.UNCLICKABLE);
    });

    test("last page link is not clickable", async () => {
      await projectPage.pagination
        .action(PaginationLink.LAST)
        .is(PaginationAction.UNCLICKABLE);
    });
  });
});
