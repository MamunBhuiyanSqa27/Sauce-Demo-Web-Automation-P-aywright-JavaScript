import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL:'https://www.saucedemo.com',
    headless: false,
    viewport: null,
    actionTimeout: 10000,
    navigationTimeout: 60000,
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },

    }
  ],

});
