import { browser, $, $$ } from "@wdio/globals";
describe('login tests', () => {
    let username, password, login;
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

    it('edit', async () => {
        await browser.url('http://192.168.0.163:3232/branch');
        await browser.pause(2000);
        const buttonedit = await $$('div[class="IconCustom_edit__gPeQo IconCustom_container___SXWq"]')
        await buttonedit[0].click()
        
        await browser.pause(4000);
        const randomValue = Math.random().toString(36).substring(7);
        const tenchinhanh = await $('Input[class="Input_inputElement__lxjX2"][placeholder="Nhập tên chi nhánh"]')
        await setValue1(tenchinhanh,randomValue);
        await browser.pause(2000);


        const diachi = await $$('div[class="Select_value__1icIC"]')
        await setvaluedropdown(diachi[0],'Thành phố Hà Nội')
        await setvaluedropdown(diachi[1],'Quận Ba Đình')
        await setvaluedropdown(diachi[2],'Phường Phúc Xá')
        
        const diachichitiet = await $('Input[placeholder="Nhập địa chỉ"]')
        await setValue1(diachichitiet,randomValue)

        const mota = await $('textarea[placeholder="Nhập mô tả"]')
        await setValue1(mota,randomValue)

        // const button = await $('div[class="Button_primary__8ZICM Button_rounded_6__tsqKR Button_btn__z_3IU"]');
        // await button.click();

        await browser.pause(6000)
    })
    async function setValue1(selector, value) {
        const element = await $(selector);
        await element.click()
        await browser.keys(['Control','a'])
        await browser.keys(['Delete'])
        await element.setValue(value);
    }
    async function setvaluedropdown(dropdown, value) {
        await dropdown.click();
        await $(`div=${value}`).click();
    }
})