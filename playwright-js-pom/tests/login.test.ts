import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { testData } from '../utils/testData';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC_LOGIN_001: Successful Login', async ({ page }) => {
    await loginPage.login(testData.validUsername, testData.validPassword);
    // TODO: Replace with actual selector to validate successful login
    await expect(page.url()).toContain('InvoiceFinancing');
  });

  test('TC_LOGIN_002: Failed Login - Invalid Credentials', async ({ page }) => {
    await loginPage.login(testData.invalidUsername, testData.invalidPassword);
    // TODO: Replace with actual selector to validate error message
    await expect(loginPage.errorMessage).toBeVisible();
  });
});