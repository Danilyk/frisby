const frisby = require('frisby');
const Joi = frisby.Joi;

describe('debugging', () => {
	it('sent request', async () => {
		const response = await frisby.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10')
		.expect('status',200)
		.expect('jsonTypes', '*', {
			title: Joi.string()
		});
		const body = response.json;
		
		body.forEach( el => {
			console.log(el.title , el.url);
		}); 
		
		});
});