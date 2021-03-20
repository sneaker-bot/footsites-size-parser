const convert = require('xml-js'); 

async function parse(body, size){

	return new Promise(async (resolve,reject) => {

		try{

			var data = await convert.xml2json(body, { compact: true, spaces: 0 });
			data = JSON.parse(data);
			data = data['pdp']['sellableUnits']; 

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