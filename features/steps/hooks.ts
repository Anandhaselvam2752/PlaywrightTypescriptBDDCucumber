// features/steps/hooks.ts
import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  console.log('Starting scenario...');
});

After(async function ({ result }) {
  if (result?.status === 'FAILED') {
    console.log('Scenario failed — screenshot should be in test-results/');
  }
});