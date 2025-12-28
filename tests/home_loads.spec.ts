import { expect, test } from "@playwright/test";

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

  await expect(page.getByText("planetplutobandgso@gmail.com")).toBeVisible();
});
