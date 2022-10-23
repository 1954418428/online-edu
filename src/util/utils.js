const globalData = {
  UserBaseInfo: "",
};

export default class utils {
  setGD(key, value) {
    if (key === "" || key == null) {
      return;
    }
    globalData[key] = value;
  }

  getGD(key) {
    if (key === "" || key == null) {
      return;
    }
    return globalData[key];
  }
}
