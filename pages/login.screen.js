'use strict'
const chai = require('chai');
import '@babel/polyfill';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const SELECTORS = {
    LOGIN_CONTAINER_BUTTON: '~button-login-container',
    LOGIN_BUTTON: 'android.widget.Button'
};

class LoginScreen{
    // constructor () {
    //     super(SELECTORS.LOGIN_SCREEN);
    // }

    get loginContainerButon () {
        return $(SELECTORS.LOGIN_CONTAINER_BUTTON);
    }

    get loginButton () {
        return $(SELECTORS.LOGIN_BUTTON);
    }
  
}

export default new LoginScreen();
