const driver = require("webdriverio")
const delay = require('delay');
const driversel = require("selenium-appium")
const { By, by } = require("protractor");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

import LoginScreen from '../pages/login.screen'
import { DEFAULT_TIMEOUT } from '../helper/constants'
const expect = chai.expect;
const { assert } = require("chai");
const androidOptions = require('../helper/caps').androidOptions

describe('Execution on Android', async function () {
  let client;

  beforeEach(async function () {
    client = await driver.remote(androidOptions);
  });

  afterEach(async function () {
    await client.deleteSession();
  });

  it('should show login and opdracht button', async function () {
    // client = await driver.remote(androidOptions)
    console.log(client.getUrl())
    await delay(3000)
    // client.saveScreenshot("/Users/vikashmishra/IcsNative_Automation/text.png")
    const LoginButton = await client.$("android.widget.Button")
    const opdrachtButton = await client.$("//android.widget.Button[2]")
    LoginButton.getText().then((text) => {
      assert.equal(text, 'Anmelden')
    })
    opdrachtButton.getText().then((text) => {
      assert.equal(text, 'Vorgang genehmigen')
    })
  })
  // driver.stopRecordingScreen(androidOptions)
  it('should show the overview page after login-single card', async function () {
    // client = await driver.remote(androidOptions);  // set this on to register the changes to WDIO
    console.log(client.getUrl())
    await LoginScreen.loginButton.click()
    await delay(3000)
    const setPinScreen = await client.$("//android.view.View[3]")
    setPinScreen.getText().then((text) => {
      console.log('Set pin 5', text)
    })
    const zugangscodeButton = await client.$("android.widget.Button")
    zugangscodeButton.getText().then((text) => {
      assert.equal(text, 'Zugangscode eingeben')
    })
    let key1 = await client.$("//android.widget.Button[@index='0']")
    await delay(1000)
    await key1.click()
    // let key12 = await client.$("//android.widget.Button[@index='0']")
    await delay(1000)
    await key1.click()
    // let key13 = await client.$("//android.widget.Button[@index='0']")
    await delay(1000)
    await key1.click()
    // let key14 = await client.$("//android.widget.Button[@index='0']")
    await delay(1000)
    await key1.click()
    // let key15 = await client.$("//android.widget.Button[@index='0']")
    await delay(4000)
    await key1.click()
    await delay (1000)
    await key1.click()
    const overviewpage = await client.$('//android.widget.Button[1]')
    overviewpage.getText().then((textname) => {
      assert.equal(textname, Übersicht)
    })
    await delay(1000)
    const settingScreen = await client.$('//android.widget.Button[4]')
    await settingScreen.click()
    await delay(1000)
    const logoutButton = await client.$("//android.widget.Button[@index='0']")
    logoutButton.click()
    await delay(4000)
  });
});
