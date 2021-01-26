// On importe le module sequelize
const { Sequelize } = require('sequelize');

// On initialise notre sequelize
const sequelize = new Sequelize(process.env.PGURL, {
    define: {
        timestamps: false
    }
});

// et on l'exporte
module.exports = sequelize;