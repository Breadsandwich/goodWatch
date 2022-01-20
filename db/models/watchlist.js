'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    showId: {
      type: DataTypes.INTEGER,
      references: { model: 'Shows' }
    }
  }, {});
  Watchlist.associate = function(models) {
    // associations can be defined here
    Watchlist.belongsTo(models.User, { foreignKey: 'userId' });
    Watchlist.belongsTo(models.Show, { foreignKey: 'showId' });
  };
  return Watchlist;
};
