const accountId = 302680
let accountEmail = "mahmadakram2004@gmail.com"
var accountPassword = "sembenimaskimsim"
accountCity = "lahore"

// accountId = 302681 //its not allowed because node.js does not allowed to change it //

accountEmail = "chmahmadakram12345@gmail.com"
accountPassword ="7876944"
accountCity = "Bahawalpur"
console.log(accountId);

// PREFER NOT TO USE Var
// because of issue in block scope and functional scope
console.table([accountId, accountPassword, accountEmail, accountCity])
