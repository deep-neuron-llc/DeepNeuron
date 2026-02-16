import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "e2e-test/**/*.cy.{ts,tsx,js,jsx}",
    supportFile: false
  }
});
