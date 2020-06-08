const UIDGenerator = require("uid-generator");

module.exports = async function generateToken() {
  const uidgen = new UIDGenerator();
  return await uidgen.generate();
};
