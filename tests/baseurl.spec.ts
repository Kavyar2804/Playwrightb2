import {test, expect} from '@playwright/test'


test('Upload file', async({page}) => {

    await page.goto('practice-test-login/')
    await page.waitForTimeout(2000)

});