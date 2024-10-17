import { browser, $ } from "@wdio/globals";

describe('login tests', () => {
    let username, password, login;
    before(async () => {
        await browser.url('http://192.168.0.163:3232/auth/login');
        username = await $('input[name="username"]');
        password = await $('input[name="password"]');
        login = await $('button[class="Button_container__By3IT"]');
    });

    it('login fail1', async () => {
        await username.setValue('Nhatlong@gmail.com1');
        await password.setValue('abc123');
        await login.click();
        await browser.pause(4000);
    });
    
    it('login fail 2', async () => {
        await setvaluedangnhap(username,'Nhatlong@gmail.com')
        await setvaluedangnhap(password,'abc1234')
        await login.click();
        await browser.pause(4000);
    })

    it('login fail 3', async () => {
        await setvaluedangnhap(username,'Nhatlong@gmail.com')
        await setvaluedangnhap(password,'')
        await login.click();
        await browser.pause(4000);
    });

    it('login fail 4', async () => {
        await setvaluedangnhap(username,'')
        await setvaluedangnhap(password,'abc123')
        await login.click();
        await browser.pause(4000);
    });

    it('logintrue', async () => {
        await setvaluedangnhap(username,'Nhatlong@gmail.com')
        await setvaluedangnhap(password,'AbC123')
        await login.click();
        await browser.pause(4000);
    })
    
    it('login', async () => {
        await browser.url('http://192.168.0.163:3232/auth/login');
        await setvaluedangnhap(username,'Nhatlong@gmail.com')
        await setvaluedangnhap(password,'abc123')
        await login.click();
        await browser.pause(4000);
    });
    async function setvaluedangnhap(selector, value) {
        await selector.click();
        await browser.keys(['Control', 'a']); 
        await browser.keys('Delete');
        await selector.setValue(value);
        await selector.click();
    }
});
