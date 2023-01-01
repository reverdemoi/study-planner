const mysql = require("mysql2/promise");
const fs = require("fs");

let config;
try {
  const configData = fs.readFileSync(
    "C:/Users/albin/OneDrive/Desktop/Project/Study Planner/src/config.json"
  );
  config = JSON.parse(configData);
} catch (error) {
  console.error(error);
  process.exit(1);
}

const pool = mysql.createPool({
  host: "db.hemma",
  user: "albin",
  password: config.DB_PASSWORD,
  database: "albin",
  insecureAuth: true
});

const getFromDatabase = async function () {
  const connection = await pool.getConnection();
  try {
    return await connection.execute("SELECT * FROM sp_accounts");
  } finally {
    connection.release();
  }
};
const log = async function () {
  console.log(await getFromDatabase());
};
log();

// connection.connect(error => {
//   if (error) {
//     console.log("Error connecting to the MySQL Database");

//     console.log(error.code);
//     return;
//   }
//   console.log("Connection established sucessfully");
// });

// const query = function (entry) {
//   connection.query(entry, (error, results) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     console.log(results);
//   });
// };

// query("SELECT * FROM sp_accounts");
// query("SHOW TABLES");

// connection.end(error => {});
