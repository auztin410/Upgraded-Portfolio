module.exports = function(sequelize, DataTypes){
    var Portfolio = sequelize.define("Portfolio", {
        name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        link: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        }
    });
    return Portfolio;
}