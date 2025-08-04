import {test, expect} from "@playwright/test"

test('dowload file', async({page}) => {
    
await page.goto('/ui/download?sublist=0')
await page.getByPlaceholder('Enter text here').fill(' new Playwright')
  const downloadpromise = page.waitForEvent('download')
await page.getByRole('button', {name:'Download'}).click()
const dowload= await downloadpromise
//await dowload.saveAs('./download/' + dowload.suggestedFilename())
await dowload.saveAs('C:/Users/User/OneDrive/Desktop/PW docs/' + dowload.suggestedFilename()) //local system
console.log(dowload.suggestedFilename());

expect(dowload.suggestedFilename()).toBe('mytextfile.txt')

});