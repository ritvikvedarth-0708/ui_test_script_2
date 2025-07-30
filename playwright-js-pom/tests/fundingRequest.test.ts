import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { FundingRequestPage } from '../pages/fundingRequest.page';
import { testData } from '../utils/testData';

test.describe('Funding Request Tests', () => {
  let loginPage: LoginPage;
  let fundingRequestPage: FundingRequestPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    fundingRequestPage = new FundingRequestPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUsername, testData.validPassword); // Login before each funding request test
  });

  test('TC_HAPPY_001: Successful Funding Request', async ({ page }) => {
    await fundingRequestPage.navigateToFundingRequest();
    await fundingRequestPage.selectInvoiceBatch(testData.eligibleBatchId); // Replace with actual batch ID
    await fundingRequestPage.initiateFundingRequest();
    await fundingRequestPage.confirmSubmission();
    // TODO: Replace with actual selector to validate success message
    await expect(fundingRequestPage.successMessage).toBeVisible(); // Check for success message
  });

  test('TC_ERROR_002: Funding Request with Invalid Vessel ID', async ({ page }) => {
    await fundingRequestPage.navigateToFundingRequest();
    await fundingRequestPage.selectInvoiceBatch(testData.invalidVesselIdBatch); // Replace with actual batch ID
    await fundingRequestPage.initiateFundingRequest();
    // TODO: Replace with actual selector to validate error message
    await expect(fundingRequestPage.errorMessage).toBeVisible(); // Check for error message
  });
});