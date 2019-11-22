import {Cookies} from "react-cookie";
import Constants from './Constants';
import moment from "moment";
import {showError} from "../components/modal/Modal";

const cookie = new Cookies();

const RestAPIHelper = {
    get(_url, _callback, hasDialogProcess = false, _error = error => {
    }) {
        // if (hasDialogProcess) {
        //   showProgress();
        // } else {
        //   showProgressFooter();
        // }
        return fetch(_url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + cookie.get(Constants.TOKEN_LOGGED),
                request_pair: moment().format("YYYYMMDDHHmmssSSS")
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(responseJson => {
                this.handlingResponse(responseJson, hasDialogProcess, _callback);
            })
            .catch(response => {
                this.handlingError(response, hasDialogProcess, _error);
            });
    },
    postNotAuthorization(
        _url,
        _callback,
        _params,
        hasDialogProcess = false,
        _error = error => {
            console.error(error);
        }
    ) {
        // if (hasDialogProcess) {
        //   showProgress();
        // } else {
        //   showProgressFooter();
        // }
        return fetch(_url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                request_pair: moment().format("YYYYMMDDHHmmssSSS")
            },
            body: JSON.stringify(_params)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(responseJson => {

                this.handlingResponse(responseJson, hasDialogProcess, _callback);
            })
            .catch(response => {
                this.handlingError(response, hasDialogProcess, _error);
            });
    },
    post(
        _url,
        _params,
        _callback,
        hasDialogProcess = false,
        _error = error => {
            console.error(error);
        }
    ) {
        // if (hasDialogProcess) {
        //   showProgress();
        // } else {
        //   showProgressFooter();
        // }
        return fetch(_url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + cookie.get(Constants.TOKEN_LOGGED),
                request_pair: moment().format("YYYYMMDDHHmmssSSS")
            },
            body: JSON.stringify(_params)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(responseJson => {
                this.handlingResponse(responseJson, hasDialogProcess, _callback);
            })
            .catch(response => {
                this.handlingError(response, hasDialogProcess, _error);
            });
    },

    login(
        _callback,
        _params,
        _error = error => {
            console.error(error);
        }
    ) {
        // showProgress();
        return fetch(Constants.API_URL + "login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                request_pair: moment().format("YYYYMMDDHHmmssSSS")
            },
            body: JSON.stringify(_params)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(responseJson => {
                this.handlingResponse(responseJson, true, _callback);
            })
            .catch(response => {
                console.log(response)
                this.handlingError(response, true, _error);
            });
    },
    handlingResponse(responseJson, hasDialogProcess, callback) {
        // if (hasDialogProcess) {
        //   hideProgress();
        // } else {
        //   hideProgressFooter();
        // }
        if (responseJson.status === Constants.RESPONSE_STATUS.SUCCESS) {
            callback(responseJson);
        } else if (responseJson.status === Constants.RESPONSE_STATUS.ERROR_WITH_PAR) {
            let mess = Constants.ERROR_CODE[responseJson.code];
            responseJson.paramCode.forEach((value, index) => {
                mess = mess.replace(":" + index, value);
            });
            showError(mess);
        } else {
            if (responseJson.code !== Constants.RESPONSE_CODE.EXCEPTION) {
                showError(Constants.ERROR_CODE[responseJson.code]);
            } else {
                showError(responseJson.message);
            }
        }
    },
    handlingError(response, hasDialogProcess, callback) {
        console.log("response", response);
        // if (hasDialogProcess) {
        //   hideProgress();
        // } else {
        //   hideProgressFooter();
        // }
        if (response.status === 500) {
            showError('Có lỗi xảy ra khi kết nối tới máy chủ');
        } else if (response.status === 401 || response.status === 403) {
            showError('Phiên làm việc không hợp lệ hoặc đã hết hiệu lực. Bạn cần đăng nhập lại để tiếp tục.');
        } else {
            showError('Có lỗi xảy ra khi xử lý');
        }
        console.error(response);
        callback(response);
    }
};
export default RestAPIHelper;
