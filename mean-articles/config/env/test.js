'use strict';

var DB_HOST = process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost';

module.exports = {
	db: 'mongodb://' + DB_HOST + '/mean-test',
	port: 3001,
	app: {
		title: 'MEAN.JS - Test Environment'
	}
};