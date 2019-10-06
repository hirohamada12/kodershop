package vn.com.kodergang.shop.entity;

import vn.com.kodergang.shop.Constant;

public class MessagesResponse {
    private String code;
    private String[] paramCode;
    private String message;
    private String status;
    private Object data;

    public MessagesResponse(){
        this.code = Constant.RESPONSE_CODE.SUCCESS;
        this.status = Constant.RESPONSE_STATUS.SUCCESS;
    }

    public MessagesResponse error(Exception e){
        this.setCode(Constant.RESPONSE_CODE.EXCEPTION);
        this.setStatus(Constant.RESPONSE_STATUS.ERROR);
        this.setMessage(e.toString());
        return this;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String[] getParamCode() {
        return paramCode;
    }

    public void setParamCode(String[] paramCode) {
        this.paramCode = paramCode;
    }
}
