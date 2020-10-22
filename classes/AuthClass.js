const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

const AuthClass = {
	doesEmailExist(email, {clientDb = null, userSchema}) {
		console.log('AuthC2lass.doesEmailExist()', email);
		if (typeof email === 'undefined') return false;
		email = email.toLowerCase();
		const Model = clientDb ? clientDb?.model('User', userSchema) : User;
		const User = myCache.get( "test" );
		return User.find({});
	},
	connect({ User }) {
		myCache.set( "test", User, 10000 );
	},
};
module.exports = AuthClass;
