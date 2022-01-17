const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "project1",
};

const selectAllMessages = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `SELECT * FROM MESSAGE ORDER BY id DESC`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();
  return list;
};

const addMessage = async (ref) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO MESSAGE (message) values (?)`;
  connection.queryAsync(sql, [ref.message]);
  console.log("Record Added!");

  await connection.endAsync();
};

module.exports = { selectAllMessages, addMessage };
