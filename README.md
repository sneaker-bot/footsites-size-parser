# Footsites-Size-ID-Parser

This is for parsing size id for footsites, this id requires for atc post request.
Look at example.js for example; 

example: 

body // the data u get from the get request to product endpoint 
size // the id for the size u wanted to parse. 

var size_id = await parse(body, '04.5').catch(() => {
  console.log('Error parsing size');
});
