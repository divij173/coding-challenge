const fs = require("fs");

function readFileDir(fileDir) {
    const fileData = fs.readFileSync(fileDir, "utf8");
    // return fileData;
    return JSON.parse(fileData); // Parsed as JS Object

}

module.exports = {readFileDir};