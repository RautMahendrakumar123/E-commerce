const bcrypt = require('bcrypt');

const IncryptPassword = async (password) => {
  const saltRounds = 8;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
};

module.exports = IncryptPassword;
