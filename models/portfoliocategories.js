PortfolioCategories = sequelize.define("PortfolioCategories", {
    role: Sequelize.STRING
});
Categories.belongsToMany(Portfolio, {through: "PortfolioCategories"});
Portfolio.belongToMany(Categories, {through: "PortfolioCategories"});