const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tacc2card', {
    id_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cards_main',
        key: 'id_index'
      }
    },
    accountno: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "tacc2card_accountno_key"
    },
    monthly_limit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_for_processor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cards_main',
        key: 'id_for_processor'
      }
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    card_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'cards_main',
        key: 'card_number'
      }
    }
  }, {
    sequelize,
    tableName: 'tacc2card',
    schema: 'bankms',
    timestamps: false,
    indexes: [
      {
        name: "tacc2card_accountno_key",
        unique: true,
        fields: [
          { name: "accountno" },
        ]
      },
      {
        name: "tacc2card_pkey",
        unique: true,
        fields: [
          { name: "id_index" },
        ]
      },
    ]
  });
};
