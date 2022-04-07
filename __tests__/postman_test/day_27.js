const frisby = require('frisby');
const {BASE_URL, USERNAME, PASS} = require('../../test-config');
const {login} = require('../../test-utils');

//describe('login test', () => {
//	it('user should be able to login', () => {
//		return frisby.post(`${BASE_URL}/user/login`,{
//			username: USERNAME,
//			password: PASS
//		}).expect('status',200)
//		.then((result) => {
//			console.log(result.json);
//			const data = result.json;
//			const token = data.response.session_token;
//			console.log(token);
//			return frisby.fetch(`${BASE_URL}/user`,{
//				method: 'GET',
//				headers: {
////					'Content-Type' : 'application/json',
//					'x-api-key' : token
//				}
//			}).expect('status',200).then((result)=>{
//				console.log(result.json);
//			});
//		});
//	});
//});

describe('user', () => {
	beforeAll( () => {
		return login(USERNAME,PASS);
	});
	it('user should get ...', () => {
		jest.setTimeout(30000);
		return frisby.get(`${BASE_URL}/user`).expect('status', 200).then((result)=>{
			const data = result.json;
			const user_id = data.response.user_id;
//			console.log(result.json);
			return frisby.get(`${BASE_URL}/account/${user_id}/summary`)
				.expect('status',200)
				.then((resultats)=>{
//				console.log(resultats.json);
			});
		});	
	});
});


