const driver = require("webdriverio")
const delay = require('delay')
const androidOptions = require('../helper/caps').androidOptions


describe('Create Android session', async function () {
  let client;

  it('it will click on login button', async function () {
    client = await driver.remote(androidOptions);
    console.log(client.getUrl())
    await delay(3000)
    const button = await client.$("android.widget.Button")
    await button.click()
    await client.deleteSession();
  });
});
