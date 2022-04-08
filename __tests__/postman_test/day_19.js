const frisby = require('frisby');
const {graphql} = require('graphql');

//const schema = buildSchema(`
//	type Artist {
//		name: String!
//		id: ID
//		image: String
//		albums(limit: Int = 10): [Album]
//	}
//	type Album {
//		name: String
//		id: ID
//		image: String
//		tracks: [Track]
//	}
//
//	type Query {
//		# Just returns "Hello world!"
//		hi(message: String = "Hi"): String
//		queryArtists(byName: String = "Britney Spears"): [Artist]
//	}
//
//	type Track {
//		name: String!
//		artists: [Artist]
//		preview_url: String
//		id: ID
//	}
//`);


describe( 'GraphQL', () => {
	it('sent request to spotify', () => {
		return frisby.post('https://joyce-spotify-graphql.herokuapp.com/graphql', {
			operationName: 'getByArtist',
			query: `
				query getByArtist($name: String!) {
					queryArtists (byName: $name) {
						name
						image
						albums {
							name
						}
					}
				}`,
			variables: { name: 'gereen day' }
		}).expect('status',200)
		.then( (results) => {
			console.log( results.json );
		});
	});
});