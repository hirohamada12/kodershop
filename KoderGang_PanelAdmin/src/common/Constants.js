export default {
  SOCKET_URL: "ws://10.14.188.2:9000",
  API_URL: "http://192.168.0.106:8085/",
  PATH_FILE_UPLOAD: "D:/upload",
  TOKEN_LOGGED: "TOKEN_LOGGED",
  IMAGE_HEADER: "data:image/jpeg;base64,",
  PERMISSION_KEY: "_p",
  REGEX_EMAIL: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
  USER_DATA: "user_data",
  REGEX_CURRENCY: /(\d)(?=(\d{3})+(?!\d))/g,
  MENUS: "menus",
  DATE_FORMAT: "DD/MM/YYYY",
  TIME_FORMAT: "HH:mm:ss",
  TIME_FORMAT2: "HH:mm",
  DATE_TIME_FORMAT: "DD/MM/YYYY HH:mm:ss",
  DATE_TIME_FORMAT2: "DD/MM/YYYY HH:mm",
  SECRET_KEY: "SecretKeyKoderGang",
  NO_VALUE: null,
  MAX_SIZE_IMAGE: 450,
  MAX_SIZE_UPLOAD: 5, //unit Mb
  NO_VALUE_ID: 0,
  ACTION:{
    UPDATE:'UPDATE',
    INSERT:'INSERT'
  },
  STATUS: {
    INACTIVE: "INACTIVE",
    CLOSE: "CLOSE",
    ACTIVE: "ACTIVE",
    PENDING: "PENDING",
    BUSY: "BUSY",
    REPAIR: "REPAIR",
    UNAVAILABLE: "UNAVAILABLE",
    ASSIGN: "ASSIGN",
  },
  RESPONSE_CODE: {
    SUCCESS: "",
    ERROR: "ERROR",
    EXCEPTION: "EXCEPTION",
  },
  ERROR_CODE:{
    LOGIN_FAIL:'Đăng nhập thất bại'
  },
  RESPONSE_STATUS: {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    ERROR_WITH_PAR: "ERROR_WITH_PAR"
  },
};
