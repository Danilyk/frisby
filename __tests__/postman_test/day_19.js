const frisby = require('frisby');

describe( 'GraphQL', () => {
	it('sent request to spotify', () => {
		return frisby.post('https://joyce-spotify-graphql.herokuapp.com/graphql', {
			header:{
				'Content-Type':'application/graphql'
			},
			body:{
//				query getByArtist($name: String!) {
//					queryArtists (byName: $name) {
//					  name
//					  image
//					  albums {
//						  name
//					  }
//					}
//				}
			}
		}).expect('status',200);
	});
});