const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tclientpersone', {
    id_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idclient: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "tclientpersone_idclient_key"
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    education: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    externalid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secretanswer: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tclientpersone',
    schema: 'bankms',
    timestamps: false,
    indexes: [
      {
        name: "tclientpersone_idclient_key",
        unique: true,
        fields: [
          { name: "idclient" },
        ]
      },
      {
        name: "tclientpersone_pkey",
        unique: true,
        fields: [
          { name: "id_index" },
        ]
      },
    ]
  });
};
