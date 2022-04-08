const frisby = require('frisby');
const cheerio = require('cheerio');
const Joi = frisby.Joi;

describe('Parse HTML', () => {
	it('get to bing', () => {
		return frisby.get('https://www.bing.com/search?q=postman')
			.then( (response) => {
				const body = response.body;
				const $ = cheerio.load(body);
				const linkVal = [];
				$('.b_algo a').each( (i, el)=> {
					linkVal.push($(el).attr('href'));
				});
				console.log(linkVal);	
			});
	});
});