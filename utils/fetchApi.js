import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': "756391c7d6msh1cdad7e3a8f9a03p17cf02jsn3c5b13d4fe89"
    },
  });

  return data;
}