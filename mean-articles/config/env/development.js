'use strict';

var DB_HOST = process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost';

module.exports = {
	db: 'mongodb://' + DB_HOST + '/mean-dev',
	app: {
		title: 'MEAN.JS - Development Environment'
	}
};