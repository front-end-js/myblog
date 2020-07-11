const ARTICLES = require('./mock-articles.js');

module.exports = (app) => {
    app.get('/articles', (request, response) => {
        response.send(ARTICLES);
    })
    app.get('/articles/:key', (request, response) => {
        response.send(
            ARTICLES.filter(article => article.key === request.params.key)[0]
        );
    })
}