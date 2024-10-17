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

    it('truecreate', async () => {
        // Lặp lại 20 lần
        // for (let i = 0; i < 20; i++) {
        await browser.url('http://192.168.0.163:3232/project');
        await browser.pause(1000)
        await browser.url('http://192.168.0.163:3232/project/create');

        await browser.pause(1000)
        //Tên chi nhánh
        const chinhanh = await $$('div[class="Select_select__EECaj"]');
        await setvaluedropdown(chinhanh[0], 'Chi nhánh Thành phố Hải Phòng')
        //Tên công trình
        const randomValue = Math.random().toString(36).substring(7);
        const tencongtrinh = await $('input[name="name"]');
        await tencongtrinh.setValue(randomValue);
        //Quy trình áp dụng
        await setvaluedropdown(chinhanh[1], 'Quy trình xây dựng chi nhánh')
        //Cán bộ chuyên quản
        const dropdown = await $('.SelectMany_value__GByN4');
        await multivalue(dropdown, ['Đô Đô', 'trang2'])

        //Lãnh đạo phụ trách
        await setvaluedropdown(chinhanh[2], 'Lê Thị Kim Dung')
        //Kế hoạch vốn đầu tư
        const randomNumber = Math.floor(Math.random(100) * 100000);
        const number = randomNumber + '000'
        const kehoachvon = await $('input[name="expectBudget"]');
        await kehoachvon.setValue(number);
        //Tổng dự toán 
        const tongdutoan = await $('input[name="realBudget"]');
        await tongdutoan.setValue(number);
        // Vốn dự phòng được duyệt
        const vonduphong = await $('input[name="reserveBudget"]');
        await vonduphong.setValue(number);
        //Tổng mức đầu tư dự án
        const tongdautu = await $('input[name="totalInvest"]');
        await tongdautu.setValue(number);
        //Thời gian bắt đầu dự kiến
        const batdaudukien = await $('input[placeholder="Chọn thời gian bắt đầu dự kiến"]');
        await batdaudukien.setValue(ngayhientai);
        //Thời gian kết thúc dự kiến
        const ketthucdukien = await $('input[placeholder="Chọn thời gian kết thúc dự kiến"]');
        await ketthucdukien.setValue(ngayngaunhien);
        // Thời gian bắt đầu dự án được phê duyệt
        const batdaupheduyet = await $('input[placeholder="Chọn thời gian bắt đầu dự án được phê duyệt"]');
        await batdaupheduyet.setValue(ngayhientai);
        //Địa chỉ
        await setvaluedropdown(chinhanh[3], 'Thành phố Hà Nội')
        await setvaluedropdown(chinhanh[4], 'Quận Ba Đình')
        await setvaluedropdown(chinhanh[5], 'Phường Phúc Xá')
        //Địa chỉ chi tiết
        const motadiachi = await $('textarea[placeholder="Nhập địa chỉ chi tiết"]');
        await motadiachi.setValue('Địa chỉ test');
        //Quy mô công trình
        const mota = await $('textarea[placeholder="Nhập quy mô công trình"]');
        await mota.setValue('Mô tả');

        // const button = await $$('.Button_text__FcN3u');
        // await button[1].click();

        await browser.pause(9000);

        // }
    });
    async function setvaluedropdown(dropdown, value) {
        await dropdown.click();
        await $(`div=${value}`).click();
    }
    async function multivalue(dropdown, values) {
        await dropdown.click();
        for (const value of values) {
            await $(`//*[text()="${value}"]`).click();
        }
    }

    // const multivalue = async (dropdown, values) => {
    //     await dropdown.click();
    //     for (const value of values) {
    //         await $(`//*[text()="${value}"]`).click();
    //     }
    // }
    const ngayhientai = today.toLocaleDateString('vi-VN')

    const randomDays = Math.floor(Math.random() * 366) ;
    const ngayngaunhien = new Date(ngayhientai);
    ngayngaunhien.setDate(today.getDate() + randomDays);
})

