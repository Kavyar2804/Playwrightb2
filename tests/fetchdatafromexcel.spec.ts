import excel from 'exceljs'
import {test, expect} from '@playwright/test'

test('fetch data', async({page}) => {

    const book = new excel.Workbook()
    await book.xlsx.readFile('./testdata/ttdataa.xlsx')
    const sheet = await book.getWorksheet('Sheet1')! //use non-null assertion ! this tell TS i know its not undefined)
    const data= await sheet.getRow(1).getCell(1).value
    console.log(data); 
    expect(data).toBe('abc')
});


test('write data to excel', async({page}) => {

    const book = new excel.Workbook()
    await book.xlsx.readFile('./testdata/ttdataa.xlsx')
    //const sheet= book.addWorksheet('Sheet2') // new worksheet
    const sheet= book.getWorksheet('Sheet2')! //add data to same workdheet
    sheet.getRow(5).getCell(6).value='Playwright'
    await book.xlsx.writeFile('./testdata/ttdataa.xlsx')

    
});