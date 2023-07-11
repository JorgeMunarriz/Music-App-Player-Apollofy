




export const GetData = async () => {
  const url = 'https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c18547b5efmsh883487bac5f9d12p13de70jsn02ed3e77ce32',
		'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  

  
};

export const data = await GetData();

