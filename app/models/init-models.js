var DataTypes = require("sequelize").DataTypes;
var _cards_main = require("./cards_main");
var _cards_main = require("./cards_main");
var _tacc2card = require("./tacc2card");
var _tacc2card = require("./tacc2card");
var _taccount = require("./taccount");
var _taccount = require("./taccount");
var _tclientpersone = require("./tclientpersone");
var _tclientpersone = require("./tclientpersone");
var _tcontract = require("./tcontract");
var _tcontract = require("./tcontract");
var _tcontractcarditem = require("./tcontractcarditem");
var _tcontractcarditem = require("./tcontractcarditem");
var _treferencecardsign = require("./treferencecardsign");
var _treferencecardsign = require("./treferencecardsign");

function initModels(sequelize) {
  var cards_main = _cards_main(sequelize, DataTypes);
  var cards_main = _cards_main(sequelize, DataTypes);
  var tacc2card = _tacc2card(sequelize, DataTypes);
  var tacc2card = _tacc2card(sequelize, DataTypes);
  var taccount = _taccount(sequelize, DataTypes);
  var taccount = _taccount(sequelize, DataTypes);
  var tclientpersone = _tclientpersone(sequelize, DataTypes);
  var tclientpersone = _tclientpersone(sequelize, DataTypes);
  var tcontract = _tcontract(sequelize, DataTypes);
  var tcontract = _tcontract(sequelize, DataTypes);
  var tcontractcarditem = _tcontractcarditem(sequelize, DataTypes);
  var tcontractcarditem = _tcontractcarditem(sequelize, DataTypes);
  var treferencecardsign = _treferencecardsign(sequelize, DataTypes);
  var treferencecardsign = _treferencecardsign(sequelize, DataTypes);

  tacc2card.belongsTo(cards_main, { as: "card", foreignKey: "card_id"});
  cards_main.hasMany(tacc2card, { as: "tacc2cards", foreignKey: "card_id"});
  tacc2card.belongsTo(cards_main, { as: "card_number_cards_main", foreignKey: "card_number"});
  cards_main.hasMany(tacc2card, { as: "card_number_tacc2cards", foreignKey: "card_number"});
  tacc2card.belongsTo(cards_main, { as: "id_for_processor_cards_main", foreignKey: "id_for_processor"});
  cards_main.hasMany(tacc2card, { as: "id_for_processor_tacc2cards", foreignKey: "id_for_processor"});
  tcontractcarditem.belongsTo(cards_main, { as: "card_number_cards_main", foreignKey: "card_number"});
  cards_main.hasMany(tcontractcarditem, { as: "tcontractcarditems", foreignKey: "card_number"});
  treferencecardsign.belongsTo(cards_main, { as: "id_index_cards_main", foreignKey: "id_index"});
  cards_main.hasMany(treferencecardsign, { as: "treferencecardsigns", foreignKey: "id_index"});
  taccount.belongsTo(tacc2card, { as: "accountno_tacc2card", foreignKey: "accountno"});
  tacc2card.hasMany(taccount, { as: "taccounts", foreignKey: "accountno"});
  taccount.belongsTo(tacc2card, { as: "card", foreignKey: "card_id"});
  tacc2card.hasMany(taccount, { as: "card_taccounts", foreignKey: "card_id"});
  cards_main.belongsTo(tclientpersone, { as: "idclient_tclientpersone", foreignKey: "idclient"});
  tclientpersone.hasMany(cards_main, { as: "cards_mains", foreignKey: "idclient"});
  tcontract.belongsTo(tcontractcarditem, { as: "contractcard_fk_tcontractcarditem", foreignKey: "contractcard_fk"});
  tcontractcarditem.hasMany(tcontract, { as: "tcontracts", foreignKey: "contractcard_fk"});
  tcontract.belongsTo(tcontractcarditem, { as: "contractnumber_tcontractcarditem", foreignKey: "contractnumber"});
  tcontractcarditem.hasMany(tcontract, { as: "contractnumber_tcontracts", foreignKey: "contractnumber"});
  tacc2card.belongsTo(cards_main, { as: "card_cards_main", foreignKey: "card_id"});
  cards_main.hasMany(tacc2card, { as: "card_tacc2cards", foreignKey: "card_id"});
  tacc2card.belongsTo(cards_main, { as: "card_number_cards_main_cards_main", foreignKey: "card_number"});
  tacc2card.belongsTo(cards_main, { as: "id_for_processor_cards_main_cards_main", foreignKey: "id_for_processor"});
  tcontractcarditem.belongsTo(cards_main, { as: "card_number_cards_main_cards_main", foreignKey: "card_number"});
  cards_main.hasMany(tcontractcarditem, { as: "card_number_tcontractcarditems", foreignKey: "card_number"});
  treferencecardsign.belongsTo(cards_main, { as: "id_index_cards_main_cards_main", foreignKey: "id_index"});
  cards_main.hasMany(treferencecardsign, { as: "id_index_treferencecardsigns", foreignKey: "id_index"});
  taccount.belongsTo(tacc2card, { as: "accountno_tacc2card_tacc2card", foreignKey: "accountno"});
  tacc2card.hasMany(taccount, { as: "accountno_taccounts", foreignKey: "accountno"});
  taccount.belongsTo(tacc2card, { as: "id_index_tacc2card", foreignKey: "id_index"});
  tacc2card.hasOne(taccount, { as: "id_index_taccount", foreignKey: "id_index"});
  cards_main.belongsTo(tclientpersone, { as: "idclient_tclientpersone_tclientpersone", foreignKey: "idclient"});
  tclientpersone.hasMany(cards_main, { as: "idclient_cards_mains", foreignKey: "idclient"});
  tcontract.belongsTo(tcontractcarditem, { as: "contractnumber_tcontractcarditem_tcontractcarditem", foreignKey: "contractnumber"});
  tcontract.belongsTo(tcontractcarditem, { as: "id_index_tcontractcarditem", foreignKey: "id_index"});
  tcontractcarditem.hasOne(tcontract, { as: "id_index_tcontract", foreignKey: "id_index"});

  return {
    cards_main,
    cards_main,
    tacc2card,
    tacc2card,
    taccount,
    taccount,
    tclientpersone,
    tclientpersone,
    tcontract,
    tcontract,
    tcontractcarditem,
    tcontractcarditem,
    treferencecardsign,
    treferencecardsign,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
