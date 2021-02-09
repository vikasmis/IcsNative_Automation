'use strict'
const chai = require('chai');
import '@babel/polyfill';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const expect = chai.expect;
class LoginScreen {
    constructor() {
        this.
            personalInformation = {
            x: "test"
        }

    }
    click() {
      
    }
    get login() { return $("android.widget.Button") }
}
export const aioPage = new LoginScreen()