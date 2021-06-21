function cat(filename) {
  const fs = require("fs");

  fs.readFile(filename, "utf8", (err, data) => {
    if (err)  process.stdout.write("bad filename");
    else  process.stdout.write(data);
    process.stdout.write("\n\nprompt > ");
    return;
  });
}

module.exports = cat;
