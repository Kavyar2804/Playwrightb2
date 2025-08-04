import{test, expect} from '@playwright/test'
import { qspLoginPage } from '../pageobjects/loginpage.ts'
import tdata from "../testdata/tdata.json"

tdata.forEach(({url, email,pwd},index)=>{
test(`Qsplogin #${index+1}`, async({page}) => {

    const qslgn = new qspLoginPage(page)
   // qslgn.navigate
    
    await qslgn.navigate(url)
    await qslgn.loginaction(email,pwd)
     
});

}) //((parmetes)=>{ here test block})

// tdata.forEach((url, usn,pwd)=>{


//     test('', () => {
        
//     });
// })
