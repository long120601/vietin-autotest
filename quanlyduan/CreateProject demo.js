describe('login tests', () => {
    let randomValue, number;

    before(async () => {
        await login();
        await prepareProjectData();
    });

    it('failcreate', async () => {
        await createProject('Chi nhánh Thành phố Hải Phòng','', ['Đô Đô', 'trang2'], 'Lê Thị Kim Dung', 'Thành phố Hà Nội', 'Quận Ba Đình', 'Phường Phúc Xá', 'Địa chỉ test', 'Mô tả');
        await browser.pause(2000);
    });
    
    it('truecreate', async () => {
        await createProject('Chi nhánh Thành phố Hải Phòng','Dự án 221',['Đô Đô', 'trang2'], 'Lê Thị Kim Dung', 'Thành phố Hà Nội', 'Quận Ba Đình', 'Phường Phúc Xá', 'Địa chỉ test', 'Mô tả');
        await browser.pause(4000);
    });

    async function login() {
        await browser.url('https://tm-demo-ad.mobiplus.vn/auth/login');
        const username = await $('input[name="username"]');
        const password = await $('input[name="password"]');
        const login = await $('button[class="Button_container__By3IT"]');
        await username.setValue('Nhatlong@gmail.com');
        await password.setValue('abc123');
        await login.click();
        await browser.pause(2000);
    }

    async function prepareProjectData() {
        await browser.url('https://tm-demo-ad.mobiplus.vn/project/create');
        randomValue = Math.random().toString(36).substring(7);
        const randomNumber = Math.floor(Math.random() * 100000);
        number = randomNumber + '000';
    }

    async function createProject(tenchinhanh,name, canbochuyenquan,lanhdaophutrach, tinh,quan, huyen, diachichitiet, quymo) {
        const dropdowns = await $$('div[class="Select_select__EECaj"]');
        await setvaluedropdown(dropdowns[0], tenchinhanh);
        const tencongtrinh = await $('input[name="name"]')
        await tencongtrinh.setValue(name);
        await setvaluedropdown(dropdowns[1], 'Quy trình xây dựng PGD');
        const multiselectDropdown = await $('.SelectMany_value__GByN4');
        await multivalue(multiselectDropdown, canbochuyenquan);
        await setvaluedropdown(dropdowns[2], lanhdaophutrach);
        await setInputValues(number);
        await setDates();
        await setvaluedropdown(dropdowns[3], tinh);
        await setvaluedropdown(dropdowns[4], quan);
        await setvaluedropdown(dropdowns[5], huyen);
        const addressInput = await $('textarea[placeholder="Nhập địa chỉ chi tiết"]');
        await addressInput.click();
        await browser.keys(['Control', 'a']); 
        await browser.keys('Delete');
        await addressInput.setValue(diachichitiet);
        const scaleInput = await $('textarea[placeholder="Nhập quy mô công trình"]');
        await scaleInput.click();
        await browser.keys(['Control', 'a']); 
        await browser.keys('Delete');
        await scaleInput.setValue(quymo);
        // const button = await $$('.Button_text__FcN3u');
        // await button[1].click();
    }

    async function setInputValues(value) {
        const budgetInputs = await $$('input[name="expectBudget"], input[name="realBudget"], input[name="reserveBudget"], input[name="totalInvest"]');
        for (const input of budgetInputs) {
            await input.click();
            await browser.keys(['Control', 'a']); 
            await browser.keys('Delete');
            await input.setValue(value);
        }
    }

    async function setDates() {
        const today = new Date().toLocaleDateString('vi-VN');
        const randomDays = Math.floor(Math.random() * 366);
        const randomDate = new Date();
        randomDate.setDate(new Date().getDate() + randomDays);

        const startInput = await $('input[placeholder="Chọn thời gian bắt đầu dự kiến"]');
        const endInput = await $('input[placeholder="Chọn thời gian kết thúc dự kiến"]');
        const approvalInput = await $('input[placeholder="Chọn thời gian bắt đầu dự án được phê duyệt"]');
        await startInput.setValue(today);
        await endInput.setValue(randomDate.toLocaleDateString('vi-VN'));
        await approvalInput.setValue(today);
    }

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
});
