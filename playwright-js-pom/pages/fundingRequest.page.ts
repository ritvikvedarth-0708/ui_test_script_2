import { expect, Page } from '@playwright/test';

export class FundingRequestPage {
  readonly page: Page;
  readonly fundingRequestLink = this.page.locator('#funding-request-link'); // TODO: Replace with actual selector
  readonly invoiceBatchDropdown = this.page.locator('#invoice-batch-dropdown'); // TODO: Replace with actual selector
  readonly initiateButton = this.page.locator('#initiate-button'); // TODO: Replace with actual selector
  readonly confirmButton = this.page.locator('#confirm-button'); // TODO: Replace with actual selector
  readonly successMessage = this.page.locator('#success-message'); // TODO: Replace with actual selector
  readonly errorMessage = this.page.locator('#error-message'); // TODO: Replace with actual selector


  constructor(page: Page) {
    this.page = page;
  }

  async navigateToFundingRequest() {
    await this.fundingRequestLink.click();
  }

  async selectInvoiceBatch(batchId) {
    await this.invoiceBatchDropdown.selectOption(batchId);
  }

  async initiateFundingRequest() {
    await this.initiateButton.click();
  }

  async confirmSubmission() {
    await this.confirmButton.click();
  }
}