const { buildSchema } = require("graphql");
 
const schema = buildSchema(`
	type Artist {
		name: String!
		id: ID
		image: String
		albums(limit: Int = 10): [Album]
	}
	type Album {
		name: String
		id: ID
		image: String
		tracks: [Track]
	}

	type Query {
		# Just returns "Hello world!"
		hi(message: String = "Hi"): String
		queryArtists(byName: String = "Britney Spears"): [Artist]
	}

	type Track {
		name: String!
		artists: [Artist]
		preview_url: String
		id: ID
	}
`);