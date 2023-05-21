import axios from 'axios';

const key = 'ddb86b07d8410cce466936e9188d62d5';
const url = 'https://api.themoviedb.org/3/search/movie';

export const buscarFilme = async (titulo) => {
    const {data} = await axios.get(
        url,
        {
            params: {
                api_key: key,
                query: titulo
            }
        }
    )
    return data.results[0];
}

