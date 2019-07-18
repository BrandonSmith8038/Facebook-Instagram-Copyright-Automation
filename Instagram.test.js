const { Builder, By, Key, until } = require('selenium-webdriver');

require('dotenv').config();

(async function example() {
	let driver = await new Builder().forBrowser('chrome').build();
	try {
		// Open Url
		await driver.get(process.env.INSTAGRAM_URL);
		// Click On 'I found content which I believe infringes my copyright'
		await driver
			.findElement(
				By.xpath('//*[@id="SupportFormRow.111187895714806"]/div[9]/label[1]'),
			)
			.click();
		// Click On 'Continue with my copyright report'
		await driver.findElement(By.xpath('//*[@id="u_0_a"]/label[1]')).click();
		// Click On 'Provide your contact information'
		await driver.findElement(By.xpath('//*[@id="u_0_d"]/label[1]')).click();
		// Click On 'Me or my organization'
		await driver.findElement(By.xpath('//*[@id="u_0_e"]/label[1]')).click();
		// Enter Name
		await driver
			.findElement(By.name('your_name'))
			.sendKeys(process.env.NAME_TEST);
		// Open Job Responsibility Menu
		await driver.findElement(By.name('job_title')).click();
		// Select The First Opiton
		await driver.findElement(By.name('job_title')).sendKeys(Key.DOWN);
		// Close The Menu
		await driver.findElement(By.name('job_title')).sendKeys(Key.RETURN);
		// Fill Out The Mailing Address Text Box
		await driver
			.findElement(By.name('Address'))
			.sendKeys(process.env.MAILING_ADDRESS_TEST);
		// Fill Out The Phone Field
		await driver.findElement(By.name('Phone')).sendKeys(process.env.PHONE_TEST);
		// Fill Out The Email Field
		await driver.findElement(By.name('email')).sendKeys(process.env.EMAIL_TEST);
		// Fill Out The Confirm Email Field
		await driver
			.findElement(By.name('confirm_email'))
			.sendKeys(process.env.EMAIL_TEST);
		// Fill Out The Rights Holder Field
		await driver
			.findElement(By.name('reporter_name'))
			.sendKeys(process.env.RIGHTS_HOLDER_TEST);

		// Choose United States
		await driver.findElement(By.xpath('//*[@id="u_0_h"]/label[1]')).click();
		// Choose Provide the content you want to report
		await driver.findElement(By.xpath('//*[@id="u_0_k"]/label[1]')).click();
		// Choose Photo, video or post
		await driver.findElement(By.xpath('//*[@id="u_0_l"]/label[1]')).click();
		// Enter IN the Photos Location On Facebook
		await driver
			.findElement(By.name('content_urls'))
			.sendKeys(process.env.USERS_LOCATION_TEST);
		// Open Why are you reporting this content? Menu
		await driver.findElement(By.name('why_reporting_me')).click();
		// Select The First Opiton
		await driver.findElement(By.name('why_reporting_me')).sendKeys(Key.DOWN);
		// Close The Menu
		await driver.findElement(By.name('why_reporting_me')).sendKeys(Key.RETURN);
		// Choose Provide your copyrighted work
		await driver.findElement(By.xpath('//*[@id="u_0_t"]/label[1]')).click();
		// Open Which of these best describes your original copyrighted work? Menu
		await driver.findElement(By.name('describe_copyrighted_work_me')).click();
		// Select The First Opiton
		await driver
			.findElement(By.name('describe_copyrighted_work_me'))
			.sendKeys(Key.DOWN);
		// Close The Menu
		await driver
			.findElement(By.name('describe_copyrighted_work_me'))
			.sendKeys(Key.RETURN);
		// Enter IN the Photos Original Location On My Website
		await driver
			.findElement(By.name('describe_copyrighted_work_me_URLs'))
			.sendKeys(process.env.ORIGINAL_LOCATION_TEST);
		// Choose Confirm declaration statement
		await driver.findElement(By.xpath('//*[@id="u_0_x"]/label[2]')).click();
		// Choose Do you agree?
		await driver.findElement(By.xpath('//*[@id="u_0_z"]/label[1]')).click();
		// FIll Out Electronic Signature
		await driver
			.findElement(By.name('Electronic_sig'))
			.sendKeys(process.env.NAME_TEST);
		// CLick Submit Button
		//await driver.findElement(By.id('u_0_18')).click();
	} finally {
		//await driver.quit();
	}
})();
