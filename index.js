const inquirer = require('inquirer');
const facebook = require('./Facebook.js');
const facebookTest = require('./Facebook.test.js');
const instagram = require('./Instagram.js');
const instagramTest = require('./Instagram.test');

inquirer
	.prompt([
		{
			type: 'list',
			name: 'facebookOrInsta',
			message: 'Facebook or Instagram',
			choices: ['Facebook 👍', 'Instagram 📷'],
		},
		{
			type: 'list',
			name: 'testMode',
			message: 'Test Mode? 📝',
			choices: ['Yes ✅', 'No ⛔'],
		},
	])
	.then(answers => {
		if (answers.testMode === 'Yes ✅') {
			if (answers.facebookOrInsta === 'Facebook 👍') {
				facebookTest();
			}
			if (answers.facebookOrInsta === 'Instagram 📷') {
				instagramTest();
			}
		}
		if (answers.testMode === 'No ⛔') {
			inquirer
				.prompt([
					{
						type: 'text',
						name: 'usersLocation',
						message: 'Enter Url Of The Users Photo 🔗',
					},
					{
						type: 'text',
						name: 'originalLocation',
						message: 'Enter Url Of The Original Photo 🔗',
					},
				])
				.then(urls => {
					if (answers.facebookOrInsta === 'Facebook 👍') {
						facebook(urls.usersLocation, urls.originalLocation);
					}
					if (answers.facebookOrInsta === 'Instagram 📷') {
						instagram(urls.usersLocation, urls.originalLocation);
					}
				});
		}
	});
