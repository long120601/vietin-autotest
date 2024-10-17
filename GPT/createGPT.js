import { browser, expect, $ } from "@wdio/globals";

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
        await browser.url('http://192.168.0.163:3232/project/create');
        
        const chinhanh = await $$('div[class="Select_select__EECaj"]');
        
        // Tên chi nhánh
        await selectDropdownValue(chinhanh[0], 'Chi nhánh Thành phố Hải Phòng');
        
        // Tên công trình
        const tencongtrinh = await $('input[name="name"]');
        await tencongtrinh.setValue(generateRandomString(7));
        
        // Quy trình áp dụng
        await selectDropdownValue(chinhanh[1], 'Quy trình xây dựng chi nhánh');
        
        // Cán bộ chuyên quản
        await selectMultipleDropdownValues('.SelectMany_value__GByN4', [
            'Đô Đô',
            'Khổng Thị Hường',
            'Trường User'
        ]);
        
        // Lãnh đạo phụ trách
        await selectDropdownValue(chinhanh[2], 'Vũ Trọng Tuân');
        
        // Kế hoạch vốn đầu tư và các trường khác
        const randomNumber = Math.floor(Math.random() * 100000000);
        await setValueBySelector('input[name="expectBudget"]', randomNumber);
        await setValueBySelector('input[name="realBudget"]', randomNumber);
        await setValueBySelector('input[name="reserveBudget"]', randomNumber);
        await setValueBySelector('input[name="totalInvest"]', randomNumber);
        
        // Thời gian bắt đầu dự kiến
        await setValueBySelector('input[placeholder="Chọn thời gian bắt đầu dự kiến"]', '06-12-2024');
        
        // Thời gian kết thúc dự kiến
        await setValueBySelector('input[placeholder="Chọn thời gian kết thúc dự kiến"]', '06-12-2024');
        
        // Thời gian bắt đầu dự án được phê duyệt
        await setValueBySelector('input[placeholder="Chọn thời gian bắt đầu dự án được phê duyệt"]', '06-12-2024');
        
        // Địa chỉ
        await selectDropdownValue(chinhanh[3], 'Thành phố Hà Nội');
        await selectDropdownValue(chinhanh[4], 'Quận Ba Đình');
        await selectDropdownValue(chinhanh[5], 'Phường Phúc Xá');
        
        // Địa chỉ mô tả
        await setValueBySelector('textarea[placeholder="Nhập địa chỉ"]', 'Địa chỉ test');
        await setValueBySelector('textarea[placeholder="Nhập quy mô công chình"]', 'Mô tả');
        
        // Lưu lại
        await $('.Button_text__FcN3u').click();
        await browser.pause(2000);
    });

    // Hàm chọn giá trị từ dropdown
    async function selectDropdownValue(dropdown, value) {
        await dropdown.click();
        await $(`div=${value}`).click();
    }

    // Hàm chọn nhiều giá trị từ dropdown
    async function selectMultipleDropdownValues(dropdownSelector, values) {
        await $(dropdownSelector).click();
        for (const value of values) {
            await $(`//*[text()="${value}"]`).click();
        }
    }

    // Hàm nhập giá trị vào trường
    async function setValueBySelector(selector, value) {
        const element = await $(selector);
        await element.setValue(value);
    }

    // Hàm tạo chuỗi ngẫu nhiên
    function generateRandomString(length) {
        return Math.random().toString(36).substring(2, length + 2);
    }
});
