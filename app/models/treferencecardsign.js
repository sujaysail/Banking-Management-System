const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treferencecardsign', {
    id_index: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cards_main',
        key: 'id_index'
      }
    },
    cardsign: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    signtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crd_stat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    additional: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'treferencecardsign',
    schema: 'public',
    timestamps: false
  });
};
