import { browser, $ } from "@wdio/globals";

describe('login tests', () => {
    let username, password, login;
    
    before(async () => {
        await browser.url('https://tm-demo-ad.mobiplus.vn/auth/login');
        username = await $('input[name="username"]');
        password = await $('input[name="password"]');
        login = await $('button[class="Button_container__By3IT"]');
    });

    async function performLogin(usernameValue, passwordValue) {
        await setvaluedangnhap(username, usernameValue);
        await setvaluedangnhap(password, passwordValue);
        await login.click();
        await browser.pause(4000);
    }

    it('login fail1', async () => {
        await performLogin('Nhatlong@gmail.com1', 'abc123');
    });

    it('login fail2', async () => {
        await performLogin('Nhatlong@gmail.com', 'abc1234');
    });

    it('login fail3', async () => {
        await performLogin('Nhatlong@gmail.com', '');
    });

    it('login fail4', async () => {
        await performLogin('', 'abc123');
    });

    it('login fail5', async () => {
        await performLogin('Nhatlong@gmail.com', 'AbC123');
    });

    it('login', async () => {
        await performLogin('Nhatlong@gmail.com', 'abc123');
    });

    async function setvaluedangnhap(selector, value) {
        await selector.click();
        await browser.keys(['Control', 'a']); 
        await browser.keys('Delete');
        await selector.setValue(value);
        await selector.click();
    }
});
