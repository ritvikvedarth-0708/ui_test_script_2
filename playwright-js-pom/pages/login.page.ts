import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField = this.page.getByRole('textbox', { name: 'something like this example@' });
  readonly passwordField = this.page.getByRole('textbox', { name: 'Password' });
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  readonly errorMessage = this.page.locator('#error-message'); // TODO: Replace with actual error message selector

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://invoice-financing-portal.services.dpw.us.virtusa.dev/?tenant=xbank');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}