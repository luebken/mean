'use strict';

var DB_HOST = process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + DB_HOST + '/mean'
};