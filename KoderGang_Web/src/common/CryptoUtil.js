import CryptoJS from "crypto-js";
//import Constants from "../configs/Constants";

const myKey = "ThMR";

export function encryptData(data) {
  // return JSON.stringify(data);
  // return CryptoJS.enc.Base64.stringify(
  //     CryptoJS.enc.Utf8.parse(myKey))
  //     +
  //     CryptoJS.enc.Base64.stringify(
  //         CryptoJS.enc.Utf8.parse(
  //             CryptoJS.AES.encrypt(JSON.stringify(data), Constants.SECRET_KEY).toString()));
  return (
    CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(myKey)) +
    CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(data)))
  );
}

export function decryptData(hash) {
  if (hash === undefined || hash === null) {
    return null;
  }
  // return hash;
  // let bytes = CryptoJS.AES.decrypt(
  //     CryptoJS.enc.Base64.parse(hash.substr(CryptoJS.enc.Base64.stringify(
  //         CryptoJS.enc.Utf8.parse(myKey)).length)).toString(CryptoJS.enc.Utf8)
  //     , Constants.SECRET_KEY);
  let h = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(myKey));
  let str = CryptoJS.enc.Base64.parse(hash.substr(h.length)).toString(
    CryptoJS.enc.Utf8
  );
  return JSON.parse(str);
}
