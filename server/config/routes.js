var mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports = function(app){
	app.get('*', function(req, res){
		res.render('index', {

		});
	});
}
