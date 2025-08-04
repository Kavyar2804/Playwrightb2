import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobile');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Apply the filter Samsung to' }).click();
  await page.getByRole('link', { name: 'Apply the filter Get It by' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy M06 5G (Sage Green, 6GB RAM, 128 GB Storage) | MediaTek' }).click();
  await page.getByRole('button', { name: 'Buy Now' }).click();
});