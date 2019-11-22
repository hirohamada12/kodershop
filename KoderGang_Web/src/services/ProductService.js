import BaseService from "./BaseService";
import RestAPIHelper from "../common/RestAPIHelper";
import Constants from "../common/Constants";

export default class ProductService extends BaseService {

  getAll = (data, _callback) => {
    RestAPIHelper.post(Constants.API_URL + "product/getAll", data, _callback);
  };
  insert = (data, _callback) => {
    RestAPIHelper.post(Constants.API_URL + "product/insert", data, _callback);
  };

  update = (data, _callback) => {
    RestAPIHelper.post(Constants.API_URL + "product/update", data, _callback);
  };

  delete = (data, _callback) => {
    console.log(data);
    RestAPIHelper.post(Constants.API_URL + "product/delete", data, _callback);
  };
}
