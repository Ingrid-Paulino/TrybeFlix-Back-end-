const connection = require("./connection")

const getAll = async () => {
    const query = 'SELECT * FROM subscribers'
    const [rows] = await connection.execute(query)
    // console.log(result);
    return rows
}

module.exports = {
    getAll,
}