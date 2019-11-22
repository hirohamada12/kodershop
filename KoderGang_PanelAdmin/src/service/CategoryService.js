import BaseService from "./BaseService";
import RestAPIHelper from "../common/RestAPIHelper";
import Constants from "../common/Constants";

export default class CategoryService extends BaseService {

  getAll = (data, _callback) => {
    RestAPIHelper.post(Constants.API_URL + "category/getAll", data, _callback);
  };
  insert = (data, _callback) => {
    RestAPIHelper.post(Constants.API_URL + "category/insert", data, _callback);
  };

  update = (data, _callback) => {
    RestAPIHelper.post(Constants.API_URL + "category/update", data, _callback);
  };

  delete = (data, _callback) => {
    console.log(data);
    RestAPIHelper.post(Constants.API_URL + "category/delete", data, _callback);
  };
}
