import App from './App.js';
// Foursquare API Info
const clientId = 'HOVJ14DMJV1YUTTFNFCD20JPGIBFU12D2JM2BOKPMY3H32BF';
const clientSecret = 'MSYD1TZ4QXVAB4PIOPLWIKK4EKG5XV0Y3N4OGXM5R43FO35I';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

// APIXU Info
const apiKey = '4105028b9f0e4a58af2201308170512';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';



// AJAX functions
// export async function getVenues(){
//
//   const urlToFetch = url + App.city + '&venuePhotos=1&limit=10&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20171207';
//   try{
//     let response = await fetch(urlToFetch);
//       if(response.ok){
//         console.log(response);
//       }
//   }catch(error) {
// 	  console.log(error);
// 	}
//
// }
