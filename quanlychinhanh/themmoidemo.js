import { browser, $, $$ } from "@wdio/globals";
describe('login tests', () => {
    let username, password, login;
    before(async () => {
        await browser.url('https://tm-demo-ad.mobiplus.vn/auth/login');
        username = await $('input[name="username"]');
        password = await $('input[name="password"]');
        login = await $('button[class="Button_container__By3IT"]');
        await username.setValue('Nhatlong@gmail.com');
        await password.setValue('abc123');
        await login.click();
        await browser.pause(2000);
    });

    it('truecreate', async () => {
        await browser.url('https://tm-demo-ad.mobiplus.vn/branch?action=create')
        const randomValue = Math.random().toString(36).substring(7);
        const tenchinhanh = await $('Input[placeholder="Nhập tên chi nhánh"]')
        await tenchinhanh.setValue(randomValue)

        const diachi = await $$('div[class="Select_value__1icIC"]')
   
        await setvaluedropdown(diachi[0],'Thành phố Hà Nội')
        await setvaluedropdown(diachi[1],'Quận Ba Đình')
        await setvaluedropdown(diachi[2],'Phường Phúc Xá')
        
        const diachichitiet = await $('Input[placeholder="Nhập địa chỉ"]')
        await diachichitiet.setValue(randomValue)

        const mota = await $('textarea[placeholder="Nhập mô tả"]')
        await mota.setValue(randomValue)
        
        // const button = await $('div[class="Button_primary__8ZICM Button_rounded_6__tsqKR Button_btn__z_3IU"]');
        // await button.click();
        
        await browser.pause(2000)
    })
    async function setvaluedropdown(dropdown, value) {
        await dropdown.click();
        await $(`div=${value}`).click();
    }
})