// eslint-disable-next-line no-undef
module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        users: _.times(100, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                username: faker.internet.userName()
            };
        })
    };
};