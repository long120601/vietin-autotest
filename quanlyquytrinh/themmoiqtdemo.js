import { browser, $, $$ } from "@wdio/globals";
describe('login tests', () => {
  const url = 'https://tm-demo-ad.mobiplus.vn'

  let username, password, login;
  before(async () => {
    await browser.url(url + '/auth/login');
    username = await $('input[name="username"]');
    password = await $('input[name="password"]');
    login = await $('button[class="Button_container__By3IT"]');
    await username.setValue('Nhatlong@gmail.com');
    await password.setValue('abc123');
    await login.click();
    await browser.pause(2000);
  });
  it('create', async () => {
    const random0 = Math.floor(Math.random() * 2) + 1
    const random1 = Math.floor(Math.random() * 3) + 1
    const random2 = Math.floor(Math.random() * 4) + 1
    await browser.url(url + '/task/create');
    await browser.pause(3000);
    const themtask = await $$('div[class="Button_blue__cVjea Button_rounded_6__tsqKR Button_btn__z_3IU"]')
    for (let i = 0; i < random0; i++) {
      await themtask[0].click()
    }
    const themsubtask = await $$('div[class="Button_skyblue__hw4Ut Button_rounded_6__tsqKR Button_btn__z_3IU"]')
    for (let x = 0; x < random1; x++) {
      await themsubtask[0].click()
      await browser.pause(1000);
    }
    const themsubsubtask = await $$('div[class="Button_green__PCptS Button_rounded_6__tsqKR Button_btn__z_3IU"]')
    for (let x = 0; x < random2; x++) {
      await themsubsubtask[0].click()
      await browser.pause(5000);
    }
    const tencongviec = await $$('input[placeholder="Nhập tên công việc"]')

 
  }
  )
})