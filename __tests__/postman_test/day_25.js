const frisby = require('frisby');
const {getRandomColor} = require('../../test-utils');

describe('Dynamic request', () => {
	const randomColor = getRandomColor();
//	console.log(randomColor);
	it('get random color data', () => {
		return frisby.get(`https://www.thecolorapi.com/id?hex=${randomColor}`)
			.expect('status',200)
			.then( (response) => {
//				console.log(response.json);
				const body = response.json;
				currentColor = {
					'hex' : body.hex.clean,
					'rgb' : body.rgb.value,
					'name' : body.name.value
				}
//				console.log(currentColor);
			return currentColor;
			})
			.then( (resp) => {
				expect(resp.hex).toEqual(randomColor);
				console.log('good color')
			});
	});
//	console.log(currentColor);
});