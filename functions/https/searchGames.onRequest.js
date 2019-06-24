const cors = require('cors')({ origin: true });
const { psnApi } = require('../axios.config');

const searchGames = (request, response) => {
    cors(request, response, () => {});
    const { query, size = 10, start = 0, location = 'tr/TR' } = request.query;

    psnApi.get(`/${location}/19/faceted-search/${query}`, {
        params: {
            query,
            start,
            size,
            game_content_type: 'games,bundles,addons',
            bucket: 'games',
            platform: 'ps4',
        }
    })
    .then(({ data: { data, included } }) => {
        const gamesData = data.relationships.children.data;
        if (gamesData.length === 0) return response.sendStatus(404);

        const gameIDs = gamesData.reduce((acc, game) => Object.assign(acc, { [game.id]: true }), {})
        const games = included.filter(item => gameIDs[item.id]);

        return response.send(games);
    })
    .catch(err => {
        console.error(err);
        return response.send(err);
    });
};

module.exports = searchGames;