import {test,expect} from '@playwright/test'

test('screenshot@smoke', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.waitForTimeout(2000)
    await page.screenshot({path: './screenshot/screen1.png'}) //complete page
    await page.locator('#name').screenshot({path: './screenshot/name.png'})
    
});