const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taccount', {
    id_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tacc2card',
        key: 'id_index'
      }
    },
    accountno: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'tacc2card',
        key: 'accountno'
      }
    },
    accounttype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currencyno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idclient: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remain: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    opendate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    closedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taccount',
    schema: 'bankms',
    timestamps: false,
    indexes: [
      {
        name: "taccount_pkey",
        unique: true,
        fields: [
          { name: "id_index" },
        ]
      },
    ]
  });
};
