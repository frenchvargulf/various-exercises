const URLs = ["1.1.1.1", "2.2.2.2", "3.3.3.3", "4.4.4.4"];
const BASE_URL = 'http://ip-api.com';

const urls = URLs.map( (url) => {
  return `${BASE_URL}/json/${url}`;
} )

const getAllData = (URLS) => {
  let axiosPromises = URLS.map(fetchData);
  return Promise.all(axiosPromises);
}

const fetchData = URL => {
  return axios
    .get(URL)
    .then( response => {
      return response.data
    })
    .catch( (error) => {
      return { success: false };
    });
}

getAllData(urls).then( resp => console.log(resp) ).catch( e => console.log(e) )


// async function getAllData(URLS){
//   let axiosPromises = URLS.map(fetchData);
//   return await Promise.all(axiosPromises);
// }
