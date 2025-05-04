import { expect, type Page } from "@playwright/test";
import { Pagination } from "./Pagination.ts";

// To do : simplifier les méthodes / encapsuler dans d'autres classes ?

export class PlumePage {
  private readonly page: Page;

  public readonly pagination: Pagination;

  constructor(page: Page) {
    this.page = page;
    this.pagination = new Pagination(page);
  }

  async toHome() {
    await this.page.goto("/");
  }

  async to(path: string) {
    await this.page.goto(path);
  }

  async clickNavigation(name: string) {
    await this.page.getByRole("link", { name }).click();
  }

  async hasTitle(title: string | RegExp) {
    await expect(this.page).toHaveTitle(title);
  }

  async hasUrl(url: string) {
    await this.page.waitForURL(url);
  }

  async hasHeader() {
    await expect(this.page.getByRole("banner")).toBeVisible();
  }

  async hasNavigation() {
    await expect(this.page.getByRole("navigation")).toBeVisible();
  }

  async hasHeadingLevel1() {
    await expect(this.page.getByRole("heading", { level: 1 })).toBeVisible();
  }

  async hasFooter() {
    await expect(this.page.getByRole("contentinfo")).toBeVisible();
  }

  async hasArticle(count: number) {
    expect(await this.page.getByRole("article").count()).toBe(count);
  }

  async clickOnLink(name: string) {
    await this.page.getByRole("link", { name }).click();
  }
}
