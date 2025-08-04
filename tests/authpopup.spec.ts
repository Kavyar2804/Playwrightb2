import{test, expect} from '@playwright/test'

test('Authentication popup', async({browser}) => {
  const context =  await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        }
    })
    const page= await context.newPage()
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    await page.waitForTimeout(2000)
});


test('notification popup', async({browser}) => {

    const context = await browser.newContext({
        permissions:[]

    })
    const page = await context.newPage()

    await page.goto('https://demoapps.qspiders.com/ui/browserNot')
    await page.getByRole('button', {name:'Notification'}).click()
    await page.waitForTimeout(2000)
    
});


