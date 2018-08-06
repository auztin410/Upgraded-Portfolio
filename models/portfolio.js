module.exports = function(sequelize, DataTypes){
    var Portfolio = sequelize.define("Portfolio", {
        name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        html_css: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        bootstrap: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        materialize: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        css_grid: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        javascript: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        node_js: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        sql: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        mongo: {
            type: DataTypes.BOOLEAN,
            validate: {
                allowNull: false,
            }
        },
        react: {
            type: DataTypes.BOOLEAN,
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