exports.config = {
    // ...
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register', './test/helpers/common.js'],
        // ...
    },
    // ...
}