const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para btener el clima'
    }
})
    .argv;

module.exports = {
    argv
}