const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcontract', {
    id_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tcontractcarditem',
        key: 'id_index'
      }
    },
    contractnumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'tcontractcarditem',
        key: 'contractnumber'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idclient: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    createclerk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    closedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tcontract',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tcontract_pkey",
        unique: true,
        fields: [
          { name: "id_index" },
        ]
      },
    ]
  });
};
       fields: [
          { name: "id_index" },
        ]
      },
    ]
  });
};
