package com.bali.common.service;

import com.bali.common.RoleRight;
import com.bali.common.mapper.RoleRightMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class RoleRightService {

    @Autowired
    private RoleRightMapper roleRightMapper;

    @GetMapping("/getRoleRights") //权限表RoleRight，传用户角色id进行查询
    public List<RoleRight> getRoleRightListByRoleId(@RequestParam Long roleId){
        return roleRightMapper.getRoleRightListByRoleId(roleId);
    }

}
