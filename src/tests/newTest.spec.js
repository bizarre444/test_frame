import { expect, test } from "@playwright/test";

const url = require("../helper/config").url;

test.describe('First test', () => {
    test('Go to page', async({ page }) => {
        await page.goto(url);
        await expect(page).toHaveURL("https://enotes.pointschool.ru/login")

    })
})