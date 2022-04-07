const frisby = require('frisby');
const WATER_DURATION = 5;

describe('Monitoring plants', () => {
	it('should i water the plants', () => {
		return frisby.get('https://water-ttl.herokuapp.com/hygrometer')
			.expect('status',200)
			.then( (result) => {
				const soilMoisture = result.json.level;
				console.log('STOKA WODI');
				console.log(result.json.level);
				if (soilMoisture <= 60){
					const count = (60 - soilMoisture) / WATER_DURATION;
					for (let i=1; i<count; i++ ){
//						const waterRequest = await 
						frisby.post('https://water-ttl.herokuapp.com/water',{
							body: {
								duration : WATER_DURATION
							}
						}).expect('status',200);
						console.log('POLITO! YES!');
					};					
					return frisby.get('https://water-ttl.herokuapp.com/hygrometer')
						.expect('status',200)
						.then( (result) => {
							console.log('TEPER STOKA WODI');
							console.log(result.json.level);
						});
//					do{
//						frisby.post('https://water-ttl.herokuapp.com/water',{
//							body: {
//								duration : WATER_DURATION
//							}
//						})
//						console.log('POLITO! YES!');
//					}while(soilMoisture <= 80);
//					frisby.post('https://water-ttl.herokuapp.com/water',{
//						body: {
//							duration : WATER_DURATION
//						}
//					})
//					console.log('POLITO! YES!');
				}else{
					console.log('NORMALNA WODI');
				}
//				return frisby.get('https://water-ttl.herokuapp.com/hygrometer')
//					.expect('status',200)
//					.then( (result) => {
//						console.log('STOKA WODI');
//						console.log(result.json.level);
//					});
			});
	});
});