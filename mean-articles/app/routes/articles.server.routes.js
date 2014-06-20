'use strict';

/**
 * Module dependencies.
 */
var articles = require('../../app/controllers/articles');

module.exports = function(app) {
	// Article Routes
	app.route('/articles')
		.get(articles.list)
		.post(articles.create);

	app.route('/articles/:articleId')
		.get(articles.read)
		.put(articles.hasAuthorization, articles.update)
		.delete(articles.hasAuthorization, articles.delete);

	// Finish by binding the article middleware
	app.param('articleId', articles.articleByID);
};