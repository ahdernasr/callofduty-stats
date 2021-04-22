const API = require("call-of-duty-api")();
const LOGIN = require("./password.js");

authenticate = async function (email, password, mystats) {
  if(mystats) {
    try {
      status = await API.login(LOGIN.getUser(), LOGIN.getPassword());
    } catch (Error) {
      return console.log(Error);
    }
  }
  else {
  try {
    status = await API.login(email, password);
  } catch (Error) {
    return console.log(Error);
  }
  }
};

exports.getMWMatchInfo = async function (gamerTag, platform) {
  try {
    let data = await API.MWcombatmp(gamerTag, platform);
    return data;
  } catch (Error) {
    console.log(Error);
  }
};

exports.getMWalltime = async function (gamerTag, platform) {
  try {
    let data = await API.MWmp(gamerTag, platform);
    return data;
  } catch (Error) {
    console.log(Error);
  }
};


exports.getUserInfo = async function () {
  try {
    let data = await API.getLoggedInUserInfo();
    return data;
  } catch (Error) {
    console.log(Error);
  }
};

exports.getCodPoints = async function (username, platform) {
  try {
    let data = await API.getCodPoints(username, platform)
    return data;
  } catch (Error) {
    console.log(Error)
  }
}

exports.getSettings = async function (username, platform) {
  try {
    let data = await API.Settings(username, platform)
    return data;
  } catch (Error) {
    console.log(Error)
  }
}


exports.getBP = async function (username, platform) {
  try {
    let data = await API.getBattlePassLoot(username, platform)
    return data;
  } catch (Error) {
    console.log(Error)
  }
}

