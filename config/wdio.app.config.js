// /**
//  * WebdriverIO config file to run tests on native mobile apps.
//  * Config file helps us configure all the settings and setup environments 
//  * to run our tests.
//  */
// const path= '/wd/hub';
// // const host = '127.0.0.1';   // default appium host
// const port = 4730;          // default appium port

// const waitforTimeout = 30 * 60000;
// const commandTimeout = 30 * 60000;

// exports.config = {
//     debug: false,
//     specs: [
//         './features/app.feature',
//     ],

//     reporters: ['allure', 'spec'],
//     reporterOptions: {
//         allure: {
//             outputDir: './allure-results/'
//         }
//     },

//     path: path,
//     port: port,

//     maxInstances: 1,

//     services: ['appium'],
//     appium: {
//         waitStartTime: 6000,
//         waitforTimeout: waitforTimeout,
//         command: 'appium',
//         logFileName: 'appium.log',
//         args: {
//             path: path,
//             port: port,
//             commandTimeout: commandTimeout,
//             sessionOverride: true,
//             debugLogSpacing: true
//         }
//     },

//     /**
//      * test configurations
//      */
//     logLevel: 'silent',
//     coloredLogs: true,
//     framework: 'cucumber',          // cucumber framework specified 
//     // cucumberOpts: {
//     //     compiler: ['ts:ts-node/register'],
//     //     backtrace: true,
//     //     failFast: false,
//     //     timeout: 5 * 60 * 60000,
//     //     require: ['./stepDefinitions/calcSteps.ts']      // importing/requiring step definition files
//     // },

//     /**
//      * hooks help us execute the repeatitive and common utilities 
//      * of the project.
//      */
//     onPrepare: function () {
//         console.log('<<< NATIVE APP TESTS STARTED >>>');
//     },

//     afterScenario: function (scenario) {
//         browser.screenshot();
//     },

//     onComplete: function () {
//         console.log('<<< TESTING FINISHED >>>');
//     }

// };
