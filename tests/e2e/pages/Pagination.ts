import { expect, type Page } from "@playwright/test";

export enum PaginationLink {
  FIRST = "First",
  PREVIOUS = "Prev",
  NEXT = "Next",
  LAST = "Last",
}

export enum PaginationAction {
  CLICKABLE,
  UNCLICKABLE,
}

export class Pagination {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async exists() {
    await expect(
      this.page.getByLabel("pagination", { exact: true }),
    ).toBeVisible();
  }

  async doesntExist() {
    await expect(
      this.page.getByLabel("pagination", { exact: true }),
    ).not.toBeVisible();
  }

  action(paginationAction: PaginationLink) {
    let link = this.page.getByRole("link", { name: paginationAction });

    return {
      is: async (clickable: PaginationAction) => {
        if (clickable === PaginationAction.CLICKABLE)
          await expect(link).toBeVisible();
        else await expect(link).not.toBeVisible();
      },
    };
  }

  async isPage(page: number) {
    await expect(
      this.page.getByLabel(`Current page : ${page}`, { exact: true }),
    ).toBeVisible();
  }

  async navigate(paginationAction: PaginationLink) {
    await this.page.getByRole("link", { name: paginationAction }).click();
  }
}
