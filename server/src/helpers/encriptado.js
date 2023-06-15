const bcrypt = require('bcryptjs');

const encrypt = async (textoplano) => {
  const hash = await bcrypt.hash(textoplano, 10);
  return hash;
}

const compare = async (passPlano, passHas) => {
     console.log(passPlano)
  return await bcrypt.compare(passPlano, passHas);
}

module.exports = { compare, encrypt}