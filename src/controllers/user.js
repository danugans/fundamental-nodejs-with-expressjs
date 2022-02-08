// Create db variable and get database connection here ...
// Get QueryTypes from sequelize
const db = require("../database/connection");
const { QueryTypes } = require("sequelize");

// Create controller add User here ...
exports.addUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const query = `INSERT INTO users (name,email,password,) VALUES ('${name}','${email}','${password}')`;

    await db.sequelize.query(query);

    res.send({
      status: "success",
      message: "Add user finished",
      query,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
// Create controller get Users here ...

// Create controller get User by received id here ...

// Create controller update User here ...

// Create controller delete User here ...
