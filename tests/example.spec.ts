import { test, expect } from '@playwright/test';

test('HomePage Visual Regression', async ({ page }) => {
  await page.goto('/');
  // Compare full page screenshot against baseline
  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
    maxDiffPixels: 100, // Allow small variations (optional)
  });
});



test('Blog Listing page Visual Regression', async ({ page }) => {
  await page.goto('/blog');
  await expect(page).toHaveScreenshot('blog-listing-page.png', { fullPage: true });
});

test('Project Listing page Regression', async ({ page }) => {
  await page.goto('/projects');

