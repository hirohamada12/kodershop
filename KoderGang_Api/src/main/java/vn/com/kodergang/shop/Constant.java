package vn.com.kodergang.shop;

public interface Constant {
    String THUMBNAIL = "_thumbnail";
    String DEFAULT_UPLOAD = "upload";
    Integer THUMBNAIL_SIZE = 100;

    interface LOG {
        String BEGIN = " =========== BEGIN ===========";
        String END = " =========== END ===========";
    }

    interface SQLQUERY {
        String PERCENT = "%";
    }

    interface RESPONSE_CODE {
        String SUCCESS = "SUCCESS";
        String DUPLICATE_KEY = "DUPLICATE_KEY";
        String DUPLICATE_EMAIL = "DUPLICATE_EMAIL";
        String DUPLICATE_USERNAME = "DUPLICATE_USERNAME";
        String DUPLICATE_USERNAME_ACTIVE = "DUPLICATE_USERNAME_ACTIVE";
        String NOT_EXISTS = "NOT_EXISTS";
        String EXCEPTION = "EXCEPTION";
        String LOGIN_FAIL = "LOGIN_FAIL";
        String NOT_FOUND = "NOT_FOUND";
        String DUPLICATE_REQUEST = "DUPLICATE_REQUEST";
        String REQUIRED_DATA = "REQUIRED_DATA";
        String DATA_CONSTRANT = "DATA_CONSTRANT";
    }

    interface API_PATH {
        String AD_USER = "admin/aduser";
        String AD_PERMISSON = "admin/adpermission";
    }

    interface RESPONSE_STATUS {
        String SUCCESS = "SUCCESS";
        String ERROR = "ERROR";
        String ERROR_WITH_PAR = "ERROR_WITH_PAR";
    }

    interface PRIVILEGE {
        String ADMIN = "ADMIN";
        String UPDATE = "UPDATE";
        String INSERT = "INSERT";
        String DELETE = "DELETE";
        String VIEW = "VIEW";
    }

    interface PERMISSION {
        String ADMIN = "ADMIN";
    }
}
