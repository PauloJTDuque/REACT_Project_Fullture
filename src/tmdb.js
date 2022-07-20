
const API_KEY = '47a0860dbc94f48214654c4a36bc54c1';
const API_BASE = 'https://api.themoviedb.org/3';

// Pegando os filmes referentes as catgegorias escolhidas
// - mais populares   movies/get-popular-movies
// -originais da Netflix
// -comédia
// -ação

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    const resposta = json.results
    console.log(json.results)
    return resposta;
}

export const getHomeList = async () => {
        return [
           {
                slug: 'popular',
                title: 'Mais Populares',
                items: await basicFetch(`/movie/popular?language=pt-BR&api_key=${API_KEY}`)
            },
            // {
            //     slug: 'originals',
            //     title: 'Originais da Netflix',
            //     items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: 'comedy',
            //     title: 'Comédia',
            //     items: await basicFetch(`/discover/movi?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: 'action',
            //     title: 'Ação',
            //     items: await basicFetch(`/discover/movi?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            // },
        ];
}

