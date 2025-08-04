import{expect ,type Locator, type Page} from '@playwright/test'

export class qspLoginPage {
    readonly page: Page
    readonly emailTf:Locator
    readonly pwdTf :Locator
    readonly lgntn:Locator

    constructor(page:Page) {
    this.page= page
    this.emailTf= page.getByPlaceholder('Enter your email')
    this.pwdTf = page.getByPlaceholder('Enter your password')
    this.lgntn= page.getByRole('button',{name: 'Login'})
    }

    async navigate(url:string)
    {
         await this.page.goto(url)
    }

    async loginaction(email:string, pwd:string)
    {
       await expect(this.emailTf).toBeEditable()
       await this.emailTf.waitFor({state:'visible'})
        await this.emailTf.fill(email)
        await this.pwdTf.fill(pwd)
        await this.lgntn.click()
    }
}