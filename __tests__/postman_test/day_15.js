const frisby = require('frisby');

describe('write to file', () => {
	jest.setTimeout(100000);
	it('local server', () => {
		return frisby.get('https://api.spacexdata.com/v4/launches/latest')
			.then( (result) => {
//				console.log('this is RESULT ')
				console.log(result.body);
				const urlEncoded = new URLSearchParams();
				urlEncoded.append('payload',1);
				console.log('!!!!!!!!!!!!!!!!!!!!!!!',Buffer.byteLength(urlEncoded.toString(), 'utf8'));
				return frisby.setup( 
					{request:{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded'
						}}
						},true).fetch('http://localhost:3000/launches', {
							method: 'POST',
							headers: {
								'Content-Length': Buffer.byteLength(urlEncoded.toString(), 'utf8')
							},
							body: `payload=${result.body}`

	//						mode: 'urlencoded',
	//						urlencoded: `payload=${result.body}`
	//					esponseJson: result.json

					});
//			.inspectResponse();
//			.inspectRequest();
// x-www-form-urlencoded

			});
	});
});