import{test, expect} from '@playwright/test'

test('Handling Browser windows', async({browser}) => {

   const context=  await browser.newContext()
   const page = await context.newPage()

await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')

const pagepromise = context.waitForEvent('page')
await page.getByRole('button',{name : "view more"}).nth(0).click()
const newpage = await pagepromise
await newpage.getByRole('button',{name:'Add to Cart'}).click()
await newpage.waitForTimeout(2000)

const allpages= await context.pages();
console.log(allpages.length);
await allpages[1].close()
const allpages1= await context.pages();
console.log(allpages1.length);
const maintab= await allpages1[0]
await maintab.bringToFront()
console.log(await maintab.title());






    
});