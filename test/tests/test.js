import desafiotestpage from '../pageobjects/desafiotestpage'

const FIXTURE_NAME = 'Automated Testing Challenge'

fixture(FIXTURE_NAME)
    .disablePageReloads(FIXTURE_NAME)
    .page('http://localhost:8080/')
    .before(async ctx => {
        ctx.hasExecuted = false
    })
    .beforeEach(async t => {
        if (!t.fixtureCtx.hasExecuted) {
            t.fixtureCtx.hasExecuted = true
            await desafiotestpage.fillForm('firstname', 'surname', 'test@gmail.com', '123')
        }
    })

test('Check Name Result', async t => {
    const name = await desafiotestpage.getName()
    await t.expect(name).eql('firstname')
})

test('Check Surname Result', async t => {
    const surname = await desafiotestpage.getSurname()
    await t.expect(surname).eql('surname')
})

test('Check Email Result', async t => {
    const email = await desafiotestpage.getEmail()
    await t.expect(email).eql('test@gmail.com')
});

test('Check Password Result', async t => {
    const password = await desafiotestpage.getPassword()
    await t.expect(password).eql('123')
})

test('Send Form', async t => {
    await desafiotestpage
        .sendForm()
        const dialogHistory = await t.getNativeDialogHistory()
        await t.expect(dialogHistory[0].text).eql('Enviado!')
});