import { test } from "@playwright/test";
import { PlumePage } from "@e2e/pages/PlumePage.ts";
import { PaginationAction, PaginationLink } from "@e2e/pages/Pagination.ts";

test.describe("projects pagination", () => {
  let blogPage: PlumePage;
  test.beforeEach(async ({ page }) => {
    blogPage = new PlumePage(page);
    await blogPage.to("/blog");
  });

  test.describe("first page", () => {
    test("pagination is present", async () => {
      await blogPage.pagination.exists();
    });

    test("first element is not clickable", async () => {
      await blogPage.pagination
        .action(PaginationLink.FIRST)
        .is(PaginationAction.UNCLICKABLE);
    });

    test("prev element is not clickable", async () => {
      await blogPage.pagination
        .action(PaginationLink.PREVIOUS)
        .is(PaginationAction.UNCLICKABLE);
    });

    test("Current page is visible", async () => {
      await blogPage.pagination.isPage(1);
    });

    test("navigate to next page", async () => {
      await blogPage.pagination.navigate(PaginationLink.NEXT);
      await blogPage.hasUrl("/blog/2");
    });

    test("navigate to last page", async () => {
      await blogPage.pagination.navigate(PaginationLink.LAST);
      await blogPage.hasUrl("/blog/8");
    });
  });

  test.describe("last page", () => {
    test.beforeEach(async () => {
      await blogPage.to("/blog/8");
    });

    test("pagination is present", async () => {
      await blogPage.pagination.exists();
    });

    test("navigate to first page", async () => {
      await blogPage.pagination.navigate(PaginationLink.FIRST);
      await blogPage.hasUrl("/blog/1");
    });

    test("navigate to previous page", async () => {
      await blogPage.pagination.navigate(PaginationLink.PREVIOUS);
      await blogPage.hasUrl("/blog/7");
    });

    test("current page is visible", async () => {
      await blogPage.pagination.isPage(8);
    });

    test("next page link is not clickable", async () => {
      await blogPage.pagination
        .action(PaginationLink.NEXT)
        .is(PaginationAction.UNCLICKABLE);
    });

    test("last page link is not clickable", async () => {
      await blogPage.pagination
        .action(PaginationLink.LAST)
        .is(PaginationAction.UNCLICKABLE);
    });
  });
});
