const iosCaps = {
    platformName: 'iOS',
    automationName: 'XCUITest',
    deviceName: process.env.IOS_DEVICE_NAME || 'iPhone 6s',
    platformVersion: process.env.IOS_PLATFORM_VERSION || '12.1',
    app: undefined // Will be added in tests
};

const iosWebCaps = {
    platformName: 'iOS',
    automationName: 'XCUITest',
    deviceName: process.env.IOS_DEVICE_NAME || 'iPhone 6s',
    platformVersion: process.env.IOS_PLATFORM_VERSION || '12.1',
    browserName: 'Safari'
};

// Leave the Android platformVersion blank and set deviceName to a random string (Android deviceName is ignored by Appium but is still required)
// If we're using SauceLabs, set the Android deviceName and platformVersion to the latest supported SauceLabs device and version
const DEFAULT_ANDROID_DEVICE_NAME = process.env.SAUCE
    ? 'Android GoogleAPI Emulator'
    : 'My Android Device';
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.SAUCE ? '7.1' : null;

const androidCaps = {
    platformName: "Android",
    deviceName: "Android Simulator", //Android Simulator//S6G
    // app: "/Users/vikashmishra/Desktop/ICSMOBAutomation/webdriverjsproject/qa.ics-nl.debug.apk",
    appPackage: "com.ics.nl.icscardsgermany.local",
    appActivity: "com.ics.nl.icscardsgermany.local.MainActivity",
    browserName: '',
    noReset: true
};

const androidWebCaps = {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
    platformVersion:
        process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
    browserName: 'chrome'
};

const serverConfig = {
    path: '/wd/hub',
    host: process.env.APPIUM_HOST || 'localhost',
    port: process.env.APPIUM_PORT || 4723,
    logLevel: 'info'
};

const androidOptions = Object.assign(
    {
        capabilities: androidCaps
    },
    serverConfig
);

const iosOptions = Object.assign(
    {
        capabilities: iosCaps
    },
    serverConfig
);

const androidWebOptions = Object.assign(
    {
        capabilities: androidWebCaps
    },
    serverConfig
);

const iosWebOptions = Object.assign(
    {
        capabilities: iosWebCaps
    },
    serverConfig
);

// const loginButton=Object.assign()

module.exports = {
    androidOptions,
    iosOptions,
    androidWebOptions,
    iosWebOptions
};
