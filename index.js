const { Builder, By, Key, until } = require('selenium-webdriver');

require('dotenv').config();

(async function example() {
	let driver = await new Builder().forBrowser('chrome').build();
	try {
		await driver.get(process.env.FACEBOOK_URL);
		// await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
		// await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
	} finally {
		//await driver.quit();
	}
})();
