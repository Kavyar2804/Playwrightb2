import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Flight Bookings' }).click();
  await page.locator('label').filter({ hasText: 'Round Trip' }).locator('div').first().click();
  await page.locator('input[name="0-departcity"]').click();
  await page.locator('input[name="0-departcity"]').click();
  await page.locator('input[name="0-departcity"]').fill('ban');
  await page.locator('input[name="0-departcity"]').click();
  await page.locator('input[name="0-departcity"]').fill('galore');
  await page.locator('input[name="0-departcity"]').click();
  await page.getByText('Bengaluru, INBLR').first().click();
  await page.getByText('Bangkok, THBKK').click();
  await page.getByRole('button', { name: '17 ₹ 9597' }).click();
  await page.getByRole('button', { name: '22 ₹ 10514' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'SEARCH' }).click();
  await page.getByText('Fastest').click();
  await page.locator('section:nth-child(3) > .OoHEz\\+ > div > .tJjCVx > .XqNaEv').first().click();
  await page.locator('label').filter({ hasText: 'Non-stop' }).locator('div').first().click();
  await page.locator('section:nth-child(4) > .OoHEz\\+ > div:nth-child(4) > .tJjCVx > .XqNaEv').click();
  await page.getByText('Book').click();
  await page.getByRole('button', { name: '✕' }).click();
});