import BaseService from "./BaseService";
import RestAPIHelper from "../common/RestAPIHelper";
import Constants from "../common/Constants";

export default class ColorService extends BaseService {

    getAll = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "color/getAll", data, _callback);
    };
    insert = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "color/insert", data, _callback);
    };

    update = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "color/update", data, _callback);
    };

    delete = (data, _callback) => {
        console.log(data);
        RestAPIHelper.post(Constants.API_URL + "color/delete", data, _callback);
    };
}
