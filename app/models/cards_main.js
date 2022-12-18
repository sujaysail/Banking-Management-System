const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cards_main', {
    id_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    card_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "cards_main_card_number_key"
    },
    id_for_processor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "cards_main_id_for_processor_key"
    },
    crd_typ: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    crd_stat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cardproduct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    signstat: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "cards_main_signstat_key"
    },
    idclient: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tclientpersone',
        key: 'idclient'
      }
    }
  }, {
    sequelize,
    tableName: 'cards_main',
    schema: 'bankms',
    timestamps: false,
    indexes: [
      {
        name: "cards_main_card_number_key",
        unique: true,
        fields: [
          { name: "card_number" },
        ]
      },
      {
        name: "cards_main_id_for_processor_key",
        unique: true,
        fields: [
          { name: "id_for_processor" },
        ]
      },
      {
        name: "cards_main_pkey",
        unique: true,
        fields: [
          { name: "id_index" },
        ]
      },
      {
        name: "cards_main_signstat_key",
        unique: true,
        fields: [
          { name: "signstat" },
        ]
      },
    ]
  });
};
