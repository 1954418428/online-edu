const globalData = {
  UserBaseInfo: {
    UserId: "111",
  },
};

const utils = {
  setGD: function (key, value) {
    if (key === "" || key == null) {
      return;
    }
    globalData[key] = value;
  },

  getGD: function (key) {
    if (key === "" || key == null) {
      return;
    }
    return globalData[key];
  },
};

export default utils;
