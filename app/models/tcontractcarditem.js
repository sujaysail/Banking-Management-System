const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcontractcarditem', {
    id_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contractnumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "tcontractcarditem_contractnumber_key"
    },
    itemcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    card_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'cards_main',
        key: 'card_number'
      }
    },
    idclient: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mbr2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disbursedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    closedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tcontractcarditem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tcontractcarditem_contractnumber_key",
        unique: true,
        fields: [
          { name: "contractnumber" },
        ]
      },
      {
        name: "tcontractcarditem_pkey",
        unique: true,
        fields: [
          { name: "id_index" },
        ]
      },
    ]
  });
};
