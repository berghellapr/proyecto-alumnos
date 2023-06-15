/* 
una vez ejecutada la app crear roles por defecto
*/

const Role = require('../src/models/Role.js');
const User = require('../src/models/User.js');


const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ nombre: "user" }).save(),
      new Role({ nombre: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

 const createAdmin = async () => {

  const userFound = await User.findOne({ email: ADMIN_EMAIL });
  console.log(userFound);
  if (userFound) return;

  const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

  const newUser = await User.create({
    username: ADMIN_USERNAME,
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    roles: roles.map((role) => role._id),
  });

};

module.exports = { createAdmin, createRoles}
