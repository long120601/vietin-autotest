import { browser, expect, $, $$ } from "@wdio/globals";
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
    it('Lấy thông tin từ bảng dự án', async () => {
        // Mở trang web
        await browser.url('http://192.168.0.163:3232/project'); // Thay URL trang web của bạn ở đây

        // Đợi cho bảng xuất hiện
        const table = await $('.Table_container__ILyey');
        await table.waitForDisplayed();

        // Lấy tất cả các hàng trong bảng
        const rows = await $$('.Table_tr_data__tqQ4W');

        // Lặp qua từng hàng để trích xuất dữ liệu
        for (const row of rows) {
            const columns = await row.$$('td');
            
            const stt = await columns[0].getText();
            const idDuAn = await columns[1].getText();
            const tenCongTrinh = await columns[2].getText();
            const quyTrinhApDung = await columns[3].getText();
            const lanhDaoPhuTrach = await columns[4].getText();
            const canBoChuyenQuan = await columns[5].getText();
            const tmDTVND = await columns[6].getText();
            const tienDoDuAn = await columns[7].getText();
            const trangThai = await columns[8].getText();

            console.log({
                stt,
                idDuAn,
                tenCongTrinh,
                quyTrinhApDung,
                lanhDaoPhuTrach,
                canBoChuyenQuan,
                tmDTVND,
                tienDoDuAn,
                trangThai
            });
        }
    });
});
