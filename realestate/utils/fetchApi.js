import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
const { data } = await axios.get((url), {
headers: {
    'X-RapidAPI-Key': '30a4504a0bmshd4420f3d57bc759p149cfdjsn7fe4aca57a3e',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
})
return data
}