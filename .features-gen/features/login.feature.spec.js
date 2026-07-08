// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Standard user logs in successfully', async ({ Given, When, Then, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I log in with username "standard_user" and password "secret_sauce"', null, { page }); 
    await Then('I should see the products page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I log in with username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":23,"value":"\"standard_user\"","children":[{"start":24,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"secret_sauce\"","children":[{"start":53,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the products page","stepMatchArguments":[]}]},
]; // bdd-data-end