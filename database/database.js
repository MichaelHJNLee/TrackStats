const { Client } = require('pg');

const client = new Client({
  user: 'michaellee',
  host: 'localhost',
  database: 'trackstats',
  port: 5432,
})
client.connect();
// `INSERT INTO users (name, password) VALUES ('${user}', '${pw}')`
const newUser = (user, pw, callback) => {
  client.query(`SELECT * FROM users WHERE name = '${user}'`)
    .then((res) => {
      if (res.rows.length > 0) {
        callback(null, 'username already taken');
      } else {
        client.query(`INSERT INTO users (name, password) VALUES ('${user}', '${pw}')`)
          .then((res) => {
            callback(null, res);
          })
      }
    })
}

module.exports = {
  newUser,
}