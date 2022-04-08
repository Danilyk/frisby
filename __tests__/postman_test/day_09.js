const frisby = require('frisby');

describe('Scripting', () => {
	it('get random user', () => {
		return frisby.get('https://randomuser.me/api/',{
			header: {
				'Content-Type':'application/json'
			}
		})
			.expect('status',200)
			.then( (response) => {
//				console.log('RESULTS RANDOM USER !!!!!!!!!!!!!!!!!!!!!!!!!!!');
//				console.log(response.body);
				const body = JSON.parse(response.body);
//				console.log( body.results);
				const people = body.results[0];
				const name = people.name.first + ' ' + people.name.last;
//				console.log(name);
				const email = people.email;
				const id = people.login.uuid;
					
				console.log('Random People');
				return frisby.post('https://postman-echo.com/post',{
					header: {
						'Content-Type':'application/json'
					},
					body: {
						"name": name,
						"email": email,
  						"id": id
					}
				}).expect('status',200)
				.then( result => {
					console.log(result);
				});
				
			});
	});
});