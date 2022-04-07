const frisby = require('frisby');
const Joi = frisby.Joi;
const MMS = 100, BMS = 1000;

describe('response time less then', ()=>{
	it('time less than 1000', () => {
		return frisby.get('https://google.com')
			.expect('status', 200).then((result) => {
				expect(result.responseTime).toBeLessThan(BMS);
//				console.log(result.responseTime);
			});
	});
	it('time in range', () => {
		return frisby.get('https://google.com')
			.expect('status', 200).then((result) => {
				const num = result.responseTime;
				expect(num).toBeWithin(MMS,BMS);
//				console.log(result.responseTime);
			});
	});
}); 
