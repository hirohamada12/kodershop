package vn.com.kodergang.common.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class DateUtil {
    public static final String FORMAT_DATE2 = "dd/MM/yyyy";
    public static final String FORMAT_DATE3 = "yyyy/MM/dd";
    public static final String FORMAT_TIME2 = "HHmmss";
    public static final String FORMAT_DATE_TIME2 = "dd/MM/yyyy HH:mm:ss";

    public static String dateToString(Date date, String strFormat) {
        if (date != null) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(strFormat);
            return simpleDateFormat.format(date);
        } else
            return null;
    }

    public static Date stringToDate(String dateString, String strFormat) {
        try {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(strFormat);
            return simpleDateFormat.parse(dateString);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static boolean isDate(String strSource, DateFormat fmt) {
        try {
            if (fmt.parse(strSource) == null)
                return false;
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public static Date addMinute(Date dt, int iValue) {
        return add(dt, iValue, Calendar.MINUTE);
    }

    public static Date add(Date dt, int iValue, int iType) {
        Calendar cld = Calendar.getInstance();
        cld.setTime(dt);
        cld.add(iType, iValue);
        return cld.getTime();
    }

    public static Date stringToDate(String str) {
        if (StringUtil.stringIsNullOrEmty(str))
            return null;
        DateFormat df = new SimpleDateFormat(FORMAT_DATE_TIME2);
        try {
            return df.parse(str);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
