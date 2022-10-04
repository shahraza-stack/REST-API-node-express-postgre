const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmail = "SELECT s FROM users s WHERE s.email = $1"
const addUser = "INSERT INTO users (name, email, age) VALUES ( $1, $2, $3)";
const removeUser = "DELETE FROM users WHERE id = $1";

module.exports = {
    getUsers,
    getUserById,
    checkEmail,
    addUser,
    removeUser,
};
