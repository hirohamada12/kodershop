package vn.com.kodergang.shop.service;import vn.com.kodergang.common.generics.GenericService;import vn.com.kodergang.shop.entity.AdUser;import java.util.List;import java.util.Map;public interface AdUserService extends GenericService<AdUser, Integer> {    boolean existsEmail(String email,String userName);    boolean existsUserName(String userName);    AdUser getUserByUserName(String userName);}