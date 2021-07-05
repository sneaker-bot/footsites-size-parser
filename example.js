const parse = require('./main.js');
const got = require('got');

async function main(){

	var get = await got.get('https://www.footlocker.com/api/products/pdp/669100FL', {

		headers : {

			    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			    "accept-language": "en",
			    "cache-control": "no-cache",
			    "pragma": "no-cache",
			    "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
			    "sec-ch-ua-mobile": "?0",
			    "sec-fetch-dest": "document",
			    "sec-fetch-mode": "navigate",
			    "sec-fetch-site": "none",
			    "sec-fetch-user": "?1",
			    "upgrade-insecure-requests": "1",
			    "user-agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"

		}

	}).catch(() => {

		console.log('Error');
	});

	var body = await get.body; 
	var size_id = await parse(body, 'random').catch(() => {
		console.log('Error parsing size id');
	});

	console.log(size_id);
};

main();
