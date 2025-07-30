import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://invoice-financing-portal.services.dpw.us.virtusa.dev/?tenant=xbank',
    /* Collect trace when retries are run. */
    trace: 'on-first-retry',
    video: 'on', // Record video of tests.
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
});