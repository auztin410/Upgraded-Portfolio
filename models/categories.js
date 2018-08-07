module.exports = function(sequelize, DataTypes){
    var Categories = sequelize.define("Categories", {
        html_css: {
            type: DataTypes.BOOLEAN
        },
        bootstrap: {
            type: DataTypes.BOOLEAN
        },
        materialize: {
            type: DataTypes.BOOLEAN
        },
        css_grid: {
            type: DataTypes.BOOLEAN
        },
        javascript: {
            type: DataTypes.BOOLEAN
        },
        node_js: {
            type: DataTypes.BOOLEAN
        },
        sql: {
            type: DataTypes.BOOLEAN
        },
        mongo: {
            type: DataTypes.BOOLEAN
        },
        react: {
            type: DataTypes.BOOLEAN
        },
    });
    return Categories;
}