import BaseService from "./BaseService";
import RestAPIHelper from "../common/RestAPIHelper";
import Constants from "../common/Constants";

export default class OrderDetailService extends BaseService {
    getOrderDetail = (data, _callback) => {
        RestAPIHelper.post(Constants.API_URL + "orderdetail/getOrderDetail", data, _callback);
    };
}
