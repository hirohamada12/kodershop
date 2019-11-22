import BaseService from "./BaseService";
import RestAPIHelper from "../common/RestAPIHelper";
import Constants from "../common/Constants";

export default class SizeService extends BaseService {

    getAll = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "size/getAll", data, _callback);
    };
    insert = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "size/insert", data, _callback);
    };

    update = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "size/update", data, _callback);
    };

    delete = (data, _callback) => {
        console.log(data);
        RestAPIHelper.post(Constants.API_URL + "size/delete", data, _callback);
    };
}
