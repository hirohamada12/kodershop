import BaseService from "./BaseService";
import RestAPIHelper from "../common/RestAPIHelper";
import Constants from "../common/Constants";

export default class OrderService extends BaseService {

    getAll = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "order/getAll", data, _callback);
    };
    insert = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "order/insert", data, _callback);
    };

    update = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "order/update", data, _callback);
    };

    delete = (data, _callback) => {
        console.log(data);
        RestAPIHelper.post(Constants.API_URL + "order/delete", data, _callback);
    };
}
