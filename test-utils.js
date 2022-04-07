const frisby = require('frisby');
const {BASE_URL} = require('./test-config');

function login(username, password) {
	return frisby.post(`${BASE_URL}/user/login`,{username,password})
		.expect('status', 200).then( result =>{
		const body = result.json;
		const token = body.response.session_token;
//		console.log(body);
		frisby.globalSetup({
			request: {
				headers: {
					'x-api-key': token,
					'Content-Type': 'application/json',
				}
			}
		});
	}); 
};

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

module.exports = {login, getRandomColor};