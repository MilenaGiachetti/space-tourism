const path = require('path');

module.exports = function override(config) {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@data': path.resolve(__dirname, 'src/data'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		},
	};
	return config;
};
