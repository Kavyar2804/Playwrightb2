import { test, expect } from "@playwright/test";


test('handling Frame', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    const frame= await page.frameLocator('[class="w-full h-96"]')
    await page.waitForTimeout(2000)
    await frame.locator('#username').fill('xyz')
    await page.waitForTimeout(2000)
    await frame.locator('#password').fill('12345')
    await page.waitForTimeout(2000)
    await frame.getByRole('button', {name:'Login'}).click()
    await page.waitForTimeout(2000)
    //await page.getByRole('link',{name:'Nested iframe'}).click()
     //await page.waitForTimeout(2000)
    await expect(page.locator('[class="go3958317564"]')).toContainText('successful!')


    
});

test('nested frame', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')

    const pframe = await  page.frameLocator('[class="w-full h-96"]') //parent frame

    // const childframe = await pframe.locator('iframe').contentFrame() //childframe
     const childframe = await pframe.frameLocator('//div[@class="form_container"]//iframe')
     await childframe.locator('#email').fill('xyz')
     await childframe.locator('#password').fill('12345')
     await childframe.locator('#confirm-password').fill('12345')
     await page.waitForTimeout(2000)
     await childframe.getByRole('button', {name:'Sign Up'}).click()
     await page.waitForTimeout(2000)
    
});

test('Window alert frame', async({page}) => {
     await page.goto('https://demoapps.qspiders.com/ui/frames/frameAlert?sublist=4')

    const frame1 = await  page.frameLocator('[class="w-full h-96"]')

    await frame1.locator("//img[@alt='High-Performance Laptop']/..//button").click()
      await page.waitForTimeout(2000)

   const frame2 = await page.frameLocator('[class="w-full h-96"]')

    await page.waitForTimeout(2000)

    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        expect( dialog.message()).toContain('sure')
        console.log( dialog.type());
        expect(dialog.type()).toBe('confirm')
        await dialog.accept()
        //await dialog.dismiss() //to click on cancel
     
    })  

await frame2.getByRole('button',{name:'Pay Now'}).click()
 await page.waitForTimeout(2000)


});

test('Nested with multiple', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3')
    //await page.waitForTimeout(2000)
    await page.waitForLoadState('networkidle')
    console.log( page.frames().length);
    const mainframe = await page.frameLocator('[class="w-full h-96"]')
    const child1 = await mainframe.frameLocator('div[class="form_container"] iframe')
    const email = await child1.locator('iframe').nth(0).contentFrame()
    await email.locator('#email').fill('xyz')
    await page.waitForTimeout(2000)

    // await page.getByRole('').waitFor({state:'visible',timeout:1000})
    //await page.waitForSelector('mainfra',{state:'visible'})
    // await page.locator().waitFor({timeout:1000})
    // await expect(locator).toHaveText('expected')







    
});