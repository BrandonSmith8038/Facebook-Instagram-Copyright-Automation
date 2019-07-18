const { Builder, By, Key, until } = require('selenium-webdriver');

require('dotenv').config();

const facebook = async (userLocation, originalLocation) => {
	let driver = await new Builder().forBrowser('chrome').build();
	try {
		// Open Url
		await driver.get(process.env.FACEBOOK_URL);
		// Click On 'I found content which I believe infringes my copyright'
		await driver
			.findElement(
				By.xpath('//*[@id="SupportFormRow.111187895714806"]/div[10]/label[1]'),
			)
			.click();
		// Click On 'Continue with my copyright report'
		await driver.findElement(By.xpath('//*[@id="u_0_b"]/label[1]')).click();
		// Click On 'Provide your contact information'
		await driver.findElement(By.xpath('//*[@id="u_0_e"]/label[1]')).click();
		// Click On 'Me or my organization'
		await driver.findElement(By.xpath('//*[@id="u_0_f"]/label[1]')).click();
		// Enter Name
		await driver.findElement(By.name('your_name')).sendKeys(process.env.NAME);
		// Open Job Responsibility Menu
		await driver.findElement(By.name('job_rightsholder')).click();
		// Select The First Opiton
		await driver.findElement(By.name('job_rightsholder')).sendKeys(Key.DOWN);
		// Close The Menu
		await driver.findElement(By.name('job_rightsholder')).sendKeys(Key.RETURN);
		// Fill Out The Mailing Address Text Box
		await driver
			.findElement(By.name('Address'))
			.sendKeys(process.env.MAILING_ADDRESS);
		// Fill Out The Phone Field
		await driver.findElement(By.name('Phone')).sendKeys(process.env.PHONE);
		// Fill Out The Email Field
		await driver.findElement(By.name('email')).sendKeys(process.env.EMAIL);
		// Fill Out The Confirm Email Field
		await driver
			.findElement(By.name('confirm_email'))
			.sendKeys(process.env.EMAIL);
		// Fill Out The Rights Holder Field
		await driver
			.findElement(By.name('reporter_name'))
			.sendKeys(process.env.RIGHTS_HOLDER);

		// Choose United States
		await driver.findElement(By.xpath('//*[@id="u_0_i"]/label[1]')).click();
		// Choose Provide the content you want to report
		await driver.findElement(By.xpath('//*[@id="u_0_l"]/label[1]')).click();
		// Choose Photo, video or post
		await driver.findElement(By.xpath('//*[@id="u_0_m"]/label[1]')).click();
		// Enter IN the Photos Location On Facebook
		await driver.findElement(By.name('content_urls')).sendKeys(userLocation);
		// Open Why are you reporting this content? Menu
		await driver.findElement(By.name('why_reporting_me')).click();
		// Select The First Opiton
		await driver.findElement(By.name('why_reporting_me')).sendKeys(Key.DOWN);
		// Close The Menu
		await driver.findElement(By.name('why_reporting_me')).sendKeys(Key.RETURN);
		// Choose Provide your copyrighted work
		await driver.findElement(By.xpath('//*[@id="u_0_x"]/label[1]')).click();
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
			.sendKeys(originalLocation);
		// Choose Confirm declaration statement
		await driver.findElement(By.xpath('//*[@id="u_0_11"]/label[1]')).click();
		// Choose Do you agree?
		await driver.findElement(By.xpath('//*[@id="u_0_13"]/label[1]')).click();
		// FIll Out Electronic Signature
		await driver
			.findElement(By.name('Electronic_sig'))
			.sendKeys(process.env.NAME);
		// CLick Submit Button
		//await driver.findElement(By.id('u_0_1b')).click();
	} finally {
		//await driver.quit();
	}
};

module.exports = facebook;
