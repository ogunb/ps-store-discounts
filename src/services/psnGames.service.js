import http from './http.service';

export async function searchGames(query, location = 'tr/TR') {
    const searchResults = await http.get('/searchGames', {
        params: {
            query,
            location,
        }
    });
    return searchResults;
}