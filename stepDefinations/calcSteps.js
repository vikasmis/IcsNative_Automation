/**
 * Step Definitons are the glue code which drive
 * the feature scenarios, Cucumber helps us provide
 * gherkin language syntax's - Given, When, Then
 */

const {Given, When, Then} = require('cucumber');

// import {AIOValidation} from '../pages/AIOValidation'
Given('Check', async () => {
   console.log('m here')
   await browser.$("android.widget.Button").click()
});
