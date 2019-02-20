const schedule = require("node-schedule");
const { exec } = require("child_process");

schedule.scheduleJob("* */5 * * * ?", function() {
  console.log("run job");
  exec(`node app.js`, (err, output) => {
    if (err) {
      console.log(`[error]${err}`);
    }

    console.log(`[success]${output}`);
  });
});
