// Local dependencies
var controllers = require('./controllers');

var Router = {

    init: function(app) {

        // Home page
        app.get('/', controllers.Home.index);

        // About page
        app.get('/about', controllers.About.index);

        // Users
        app.get('/users', controllers.Users.index);
        // Search
        app.get('/search. controller.Users.index');

    }

};

module.exports = Router;
