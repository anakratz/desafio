import { Selector, t } from 'testcafe'

class DesafioTestPage {

    constructor() {
        this.nameInput = Selector('div:nth-child(2) > div > input[type=text]')
        this.surnameInput = Selector('div:nth-child(3) > div > input[type=text]')
        this.emailInput = Selector('div:nth-child(4) > div > input[type=text]')
        this.passwordInput = Selector('div:nth-child(5) > div > input[type=password]')
        this.sendBtn = Selector('#app > div > form > button')

        this.nameResult = Selector('div:nth-child(2) > span')
        this.surnameResult = Selector('div:nth-child(3) > span')
        this.emailResult = Selector('div:nth-child(4) > span')
        this.passwordResult = Selector('div:nth-child(5) > span')
    }

    async getName() {
        return this.nameResult.textContent
    }

    async getSurname() {
        return this.surnameResult.textContent
    }

    async getEmail() {
        return this.emailResult.textContent
    }

    async getPassword() {
        return this.passwordResult.textContent
    }

    async fillForm(name, surname, email, password) {
        await t
            .typeText(this.nameInput, name)
            .typeText(this.surnameInput, surname)
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
    }

    async sendForm() {
        await t
            .setNativeDialogHandler(() => true)
            .click(this.sendBtn)
    }
}

export default new DesafioTestPage()