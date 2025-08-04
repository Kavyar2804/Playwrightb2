import {test,expect} from '@playwright/test'

test('Sample test', async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await expect(page).toHaveTitle('DemoApps | Qspiders | Text Bo') //validating the titile of the page
    await expect(page.getByPlaceholder('Enter your name')).toBeEditable() //validating locator to be editable
    await page.getByPlaceholder('Enter your name').fill('xyz')
    await page.waitForTimeout(2000) //pausing script for seconds
    await page.getByPlaceholder('Enter Your Email').fill('xyz@gmail.com')
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Enter your password').fill('xyz123`')
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:'Register'}).click()

    await page.getByRole('link', {name: 'Login Now'}).click()
    
    await page.waitForTimeout(2000)


})