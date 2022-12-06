import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { CommonActions } from "../pages/common-actions";

const commonActions = new CommonActions();

Given(/^I open the application$/, function () {
  commonActions.visit("/");
});
When(/^I click "([^"]*)" button$/, function (label: string) {
  commonActions.pressButton(label);
});
