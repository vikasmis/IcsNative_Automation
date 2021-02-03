const driver = require("webdriverio")
const delay = require('delay');
const driversel = require("selenium-appium")
const { By, by } = require("protractor");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const LoginScreen = require('../pages/LoginScreen')

const androidOptions = require('../helper/caps').androidOptions

describe('Create session for device-login', async function () {
  let client;

  beforeEach(async function () {
    client = await driver.remote(androidOptions);
  });

  afterEach(async function () {
    await client.deleteSession();
  });

  it('should show login and opdracht button', async function () {
    console.log(client.getUrl())
    await delay(3000)
    const LoginButton = await client.$("android.widget.Button")
    const opdrachtButton = await client.$("//android.widget.Button[2]")
    LoginButton.getText().then((text) => {
      if (text == 'Anmelden') {
        console.log('Login text', text)
      }
    })
    opdrachtButton.getText().then((text) => {
      if (text == 'Vorgang genehmigen') {
        console.log('Opdracht text', text)
      }
    })
  })

  it('should show the overview page after login-sinle card', async function () {
    console.log(client.getUrl())
    await delay(3000)
    const LoginButton = await client.$("android.widget.Button")
    await LoginButton.click()
    await delay(3000)
    const setPinScreen = await client.$("//android.view.View[3]")
    setPinScreen.getText().then((text) => {
      console.log('Set pin 5', text)
    })
    const zugangscodeButton = await client.$("android.widget.Button")
    zugangscodeButton.getText().then((text) => {
      if (text == 'Zugangscode eingeben') {
        console.log(text)
        console.log('enterpin page')
      }
    })

    // move to <locator.js> and call as one
    let key1 = await client.$("//android.widget.Button[@index='0']")
    await key1.click()
    let key12 = await client.$("//android.widget.Button[@index='0']")
    await key12.click()
    let key13 = await client.$("//android.widget.Button[@index='0']")
    await key13.click()
    let key14 = await client.$("//android.widget.Button[@index='0']")
    await key14.click()
    let key15 = await client.$("//android.widget.Button[@index='0']")
    await key15.click()
    await delay(5000)
    const overviewpage = await client.$('//android.widget.Button[1]')
    overviewpage.getText().then((textname) => {
      console.log('m loggedin ', textname)
    })
  });
});
