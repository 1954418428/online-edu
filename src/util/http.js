import request from "./request";

function get(url, params, info = "", showMsg = false) {
  console.log("GET", url, info);
  console.log(params);
  return new Promise((resolve, reject) => {
    request
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function post(url, params, info = "", showMsg = false) {
  console.log("POST", url, info);
  console.log(params);
  return new Promise((resolve, reject) => {
    request
      .post(url, { ...params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const http = {
  get,
  post,
};

export default http;
