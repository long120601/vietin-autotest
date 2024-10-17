
import { browser, expect, $, $$ } from "@wdio/globals";

describe('login tests', () => {
    before(async () => {
        await browser.url('http://192.168.0.163:3232/auth/login');
        username = await $('input[name="username"]');
        password = await $('input[name="password"]');
        login = await $('button[class="Button_container__By3IT"]');
        await username.setValue('Nhatlong@gmail.com');
        await password.setValue('abc123');
        await login.click();
        await browser.pause(2000);
    });

    it('Check bộ lọc', async () => {
        await browser.url('http://192.168.0.163:3232/project');
        await browser.pause(2000);
        
        const table = await $('.Table_container__ILyey')
        await table.waitForDisplayed();
        
        const boloc = await $('input[placeholder="Tìm kiếm theo tên dự án, ID"]')
        await boloc.setValue('Dự án')
        await browser.pause(2000);

        const boloctrangthai = await $('div[class="MainPageProject_filter__OuZ1Z"]');
        await boloctrangthai.click()
        const optionboloctrangthai = await $('div=Chuẩn bị');
        await optionboloctrangthai.click();

        const rows = await $$('.Table_tr_data__tqQ4W')
        for (const row of rows) {
            const columns = await row.$$('td');
            const tencongtrinh = await columns[2].getText();
            const trangthai = await columns[8].getText();
            
            // console.log(tencongtrinh);
            expect(tencongtrinh.toLowerCase()).toContain('dự án');
            expect(trangthai.toLowerCase()).toContain('Chuẩn bị');


            await browser.pause(2000);
        }
    })
});
