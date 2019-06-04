const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
    constructor(username, email) {
        this.name = username;
        this.email = email;
    }

    save() {
        return getDb().collection("users").insertOne(this).then(result => console.log(result)).catch(err=> console.log(err) );
    }

    static findById(userId) {
        return getDb().collection('users').findOne({_id: new mongodb.ObjectId(userId)})
        .then(user => {
            console.log(user);
            return user}).catch(err=>console.log(err));
        // .next().then(user => user).catch(err=>console.log(err));
    }
}

module.exports = User;