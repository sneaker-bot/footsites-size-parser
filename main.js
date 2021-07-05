const convert = require('xml-js'); 

async function parse(body, size){

	return new Promise(async (resolve,reject) => {

		try{

			var data = await convert.xml2json(body, { compact: true, spaces: 0 });
			data = JSON.parse(data);
			data = data['pdp']['sellableUnits']; 

			var available_sizes = [];

			data.map(b => { 

				available_sizes.push(b['attributes'][0]['value']['_text']);

			});

			available_sizes = new Set(available_sizes);
			available_sizes = Array.from(available_sizes);

			function random(min, max){

    			return Math.floor(Math.random() * (max - min) + min);
			};

			if(size == 'random'){

				size = available_sizes[random(0, available_sizes.length - 1)];
			};

			var size_id = data.find(b => b['attributes'][0]['value']['_text'] == size);

			size_id = size_id['attributes'][0]['id']['_text'];

			resolve({
				id : size_id
			});

		}catch{
			reject({
				error : true
			});
		};
	});
};

module.exports = parse;
