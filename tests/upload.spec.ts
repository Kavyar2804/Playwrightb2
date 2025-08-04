import {test, expect} from '@playwright/test'
import path from 'path';

test('Upload file', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
    await page.locator('#singleFileInput').setInputFiles((path.join(__dirname, '../pw script.txt')))
    await page.getByRole('button',{name:'Upload Single File'}).click()
    const status = await page.locator('#singleFileStatus').textContent()
    await expect(status).toContain('Single file selected')
    await page.waitForTimeout(3000)
    
});

test('Upload multiple file', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded()
    await page.locator('#multipleFilesInput').setInputFiles([(path.join(__dirname, '../pw script.txt')),(path.join(__dirname,'../hadlingweblement.txt'))])
    await page.getByRole('button',{name:'Upload Multiple Files'}).click({timeout:3000})
    const status = await page.locator('#multipleFilesStatus').textContent()
    await expect(status).toContain('Multiple files selected')
    await page.waitForTimeout(3000)

});