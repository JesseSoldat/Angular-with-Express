var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	username: String,

});

var User = mongoose.model('User', userSchema);


function createDefaultUsers(){
	User.find({}).exec(function(err, colletion){
		if(colletion.length === 0){

		}
	})
};

exports.createDefaultUsers = createDefaultUsers;


