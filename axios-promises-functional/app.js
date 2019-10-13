const URLS = ["1.1.1.1", "2.2.2.2", "3.3.3.3", "4.4.4.4"];
const BASE_URL = 'http://ip-api.com';

const companiesList = document.querySelector('.promises-companies-list');
const asyncList = document.querySelector('.async-companies-list');


const createSpan = (element, el) => {
  const span = document.createElement("span");
  span.innerText = ` ${element} `;
  el.append(span)
}

const createLi = (data, list) => {
  const el = document.createElement("li");

  createSpan(data.as, el)
  createSpan(data.query, el)
  createSpan(data.country, el)
  createSpan(data.isp, el)

  list.append(el)
}

const PromiseAxios = (url) => {
  axios.get(`${BASE_URL}/json/${url}`)
  .then(function (response) {
    // handle success
    const data = response.data;
    createLi(data, companiesList)
    return data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
  });
}

const getAsyncResponse = async (url) => {
  try {
    const res = await axios.get(`${BASE_URL}/json/${url}`);
    const ARRAY = res.data;

    createLi(ARRAY, asyncList)
    return ARRAY;
  } catch (e) {
    console.error(e);
  }
};

const getAsyncData = (urls) => {
  urls.map( (url) => {
    return getAsyncResponse(url)
  } )
}

const getData = (urls) => {
  urls.map( (url) => {
    return PromiseAxios(url, asyncList)
  } )
}

getData(URLS)
getAsyncData(URLS)