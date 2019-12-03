package com.bali.common.mapper;



import com.bali.common.RoleRight;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
//@Mapper   //注解要定义成一个接口interface接口交给Spring进行管理
public interface RoleRightMapper {

    //根据RoleId查询对应的权限
    List<RoleRight> getRoleRightListByRoleId(Long roleId);
}
