import{test,expect} from '@playwright/test'

test.describe('Somke suite',()=>{

    test.beforeAll(()=>{

        //before all your tezt block it will execute only once
        //database conncetion
        console.log('before all');

    })

    test.beforeEach(()=>{

        //executes before each test 
        //login to application code

        console.log('before each');
        
    })
    test.afterEach(()=>{

         //executes after each test blocks

         //logout  from applications
        console.log('after each');

    })
    test.afterAll(()=>{

        //after all your test blocks

        //close db connection
        console.log('after all');
        
    })

 test('dboubleclick', async({page}) => {

    await page.goto('https://qa-practice.netlify.app/double-click')
    await page.getByRole('button', {name:'Double click me'}).dblclick()
    await page.waitForTimeout(1000) 
    await expect(page.locator('#double-click-result')).toContainText('double clicked!')
    await page.waitForTimeout(1000) 
    
});

test('Drap&drop', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0')
    await page.getByText('Mouse Actions').click()
    await page.getByText('Drag & Drop' ,{exact:true}).click()
    await page.waitForTimeout(1000) 
    await page.getByText('Drag Position').click()
    await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'))
    await page.waitForTimeout(1000) 
    await page.getByText('Laptop Cover').dragTo(page.getByText('Laptop Accessories'))
    await page.waitForTimeout(1000)
});















})