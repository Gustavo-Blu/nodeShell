process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd == "pwd") {
    require("./pwd.js");
  } else if (cmd == "ls") {
    require("./ls.js");
  } else if (cmd.split(" ")[0] === "cat") {
    const catFunction = require("./cat.js");
    let filename = cmd.split(" ")[1];
    catFunction(filename);
  } else if(cmd.split(" ")[0] === "curl"){
    const curlFunction = require("./curl.js")
    let websiteName = cmd.split(" ")[1];
    curlFunction(websiteName);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\n\nprompt > ");
  }
});
