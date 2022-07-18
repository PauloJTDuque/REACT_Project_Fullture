const API_KEY = '47a0860dbc94f48214654c4a36bc54c1';
const API_BASE = 'https://developers.themoviedb.org/3/';


// Pegando os filmes referentes as catgegorias escolhidas
// - mais populares   movies/get-popular-movies
// -originais da Netflix
// -comédia
// -ação

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



export defautl{
    getHomeList: async () => {
        return [
            {
                slug: 'popular-movies',
                title: 'Mais Populares',
                items: []
            }
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: []
            }
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            }
            {
                slug: 'action',
                title: 'Ação',
                items: []
            }
        ]
    }

}