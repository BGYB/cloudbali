package com.bali.common.mapper;


import com.bali.common.UserInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper   //注解要定义成一个接口interface接口交给Spring进行管理
public interface UserMapper {
    List<UserInfo> getUserListByMap(Map<String, Object> conditionMap);

    int NewUser(UserInfo userInfo);

    UserInfo  loadUser(String userName,String userPwd); //登入


}
