import axios from 'axios';

const APIKEY = 'XsYonlEb2sJ6DXGFco3R7bZoJliOukB9';

const baseURL =
  'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=';

export const getNews = async () => {
  try {
    const { data } = await axios.get(`${baseURL}${APIKEY}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
