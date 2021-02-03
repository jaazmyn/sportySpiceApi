import chalk from "chalk";

const getTimeForRequestToFinish = (start) => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

const Logger = {
  print: (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
    console.log(
      `Started ${req.method} ${req.url} at ${chalk.blue(formatted_date)}`
    );
    console.log(`IP: ${req.ip}`);
    console.log(
      `HTTP ${req.httpVersion} host: ${req.headers.host} connection: ${req.headers.connection}`
    );
    console.log(
      `Request finished in ${chalk.red(
        getTimeForRequestToFinish(process.hrtime()).toLocaleString() + " ms"
      )} with status code ${res.statusCode}`
    );
    next();
  },
};

export default Logger;
