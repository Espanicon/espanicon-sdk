const TAGS = {
  reset: "\x1b[0m",
  colors: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    default: "\x1b[39m"
  },
  style: {
    bold: "\x1b[1m"
  },
  bg: {
    default: "\x1b[49m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m"
  }
};

function alertMsg(msg) {
  //
  return `\x1b[41;30m${msg}${TAGS.reset}`;
}

function warningMsg(msg) {
  //
  return `\x1b[43;30m${msg}${TAGS.reset}`;
}

function successMsg(msg) {
  //
  return `\x1b[42;30m${msg}${TAGS.reset}`;
}

module.exports = {
  alertMsg,
  warningMsg,
  successMsg
};
