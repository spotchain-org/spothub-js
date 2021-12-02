const Space = require("./Space");
const SpaceLedgerEntry = require("./SpaceLedgerEntry");

const setModelConnection = function (aModel, connection) {
  aModel.connection = connection;
  return aModel;
};

export default function spotspace(config) {
  const connection = null; // TODO
  const models = {
    Space: setModelConnection(Space, connection),
    SpaceLedgerEntry: setModelConnection(SpaceLedgerEntry, connection),
  };
  return { connection, models };
}
