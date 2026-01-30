import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test.use({
    viewport: { width: 1280, height: 3608 },
  });
  test('Home Page Visual Regression', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('home-page.png', {
      fullPage: false,
    });
  });

  test('Blog Listing Page Visual Regression', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveScreenshot('blog-listing-page.png', {
      fullPage: false,
    });
  });

  test('Project Listing Page Regression', async ({ page }) => {
    await page.goto('/projects');
    await expect(page).toHaveScreenshot('project-listing-page.png', {
      fullPage: false,
    });
  });
});
