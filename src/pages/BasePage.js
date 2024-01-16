const { expect } = require('@playwright/test');
//const url = require('../helper/config').url;

exports.PlaywrightDevPage = class PlaywrightDevPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.brandLink = page.locator('a.navbar-brand', { hasText: "OK-Notes" });
        this.loginInput = page.locator('div.form-group #loginform-username');
        this.parrwordInput = page.locator('div.form-group #loginform-username');
    }

    async open(url, path) {
        if (typeof path == 'undefined') {
            await this.page.goto(url);
        } else {
            await this.page.goto(url + path);
        }
    }

    async getUrl() {
        return this.page.url();
    }


};