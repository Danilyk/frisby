const frisby = require('frisby');
let page = 2599;
let status;

describe('comics pages', () => {
	it('send', async () => {
		do {
			const response = 
				await frisby.get(`http://xkcd.com/${page}/info.0.json`);
				status = response.status;
				console.log(status);
				page++;
		} while( status == 200 );
	});
});