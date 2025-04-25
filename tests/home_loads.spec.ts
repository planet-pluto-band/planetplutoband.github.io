import { type Page, expect, test } from "@playwright/test";

interface OptionsType {
  exact?: boolean;
}

const verifyInput = async (
  page: Page,
  placeholder: string,
  options?: OptionsType,
) => {
  const input = page.getByPlaceholder(placeholder, options);
  await expect(input).toBeVisible();
  await expect(input).toHaveText("");
  await expect(input).toBeEditable();
};

test("navbar is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("nav")).toBeVisible();
});

test("Header is visible", async ({ page }) => {
  await page.goto("/");

  expect(await page.innerText("h1")).toBe("Planet Pluto");
});

test("Videos are visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#videos")).toBeVisible();
});

test("Contact is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#contact")).toBeVisible();
});

test("Contact form is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("form")).toBeVisible();
});

test("Contact inputs are visible, empty and editable", async ({ page }) => {
  await page.goto("/");

  await verifyInput(page, "Name *", { exact: true });
  await verifyInput(page, "Email Address *", { exact: true });
  await verifyInput(page, "Your Message *", { exact: true });
});
