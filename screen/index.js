const driver = require("webdriverio")
const delay = require('delay');
const driversel = require("selenium-appium")
const { By, by } = require("protractor");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const androidOptions = require('../helper/caps').androidOptions


describe('Create Android session', async function () {
  let client;

  it('it will click on login button', async function () {
    client = await driver.remote(androidOptions);
    console.log(client.getUrl())
    await delay(3000)
    const button = await client.$("android.widget.Button")
    button.getText().then((text) => {
      if (text == 'Anmelden') {
        console.log('Germany tanants')
      }
    })
    await button.click()
    await delay(3000)

    const loginPageValidation = await client.$("//android.view.View[3]")
    loginPageValidation.getText().then((text) => {
      console.log('paritto', text)
    })
    const zugangscodeButton = await client.$("android.widget.Button")

    zugangscodeButton.getText().then((text) => {
      if (text == 'Zugangscode eingeben') {
        console.log(text)
        console.log('enterpin page')
      }
    })
    // await delay(3000)
    let enterButton = await client.$("//android.view.View[6]/android.widget.Button")
    await enterButton.click()
    let enterButton2 = await client.$("//android.view.View[6]/android.widget.Button")
    await enterButton2.click()
    let enterButton3 = await client.$("//android.view.View[6]/android.widget.Button")
    await enterButton3.click()
    let enterButton4 = await client.$("//android.view.View[6]/android.widget.Button")
    await enterButton4.click()
    let enterButton5 = await client.$("//android.view.View[6]/android.widget.Button")
    await enterButton5.click()
    let enterButton6 = await client.$("//android.view.View[6]/android.widget.Button")
    await enterButton6.click()
    await delay(6000)
    const overviewpage = await client.$('//android.widget.Button[1]')
    // overviewpage.isExisting().then((result) => {
    overviewpage.getText().then((textname) => {
      console.log('m loggedin ', textname)
    })
    // })
    // await client.deleteSession();
  });
});
