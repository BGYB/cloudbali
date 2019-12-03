package com.bali.common.controller;

import com.bali.common.RoleRight;
import com.bali.common.client.RoleRightFeignClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoleRightController {

    @Autowired
    private RoleRightFeignClient roleRightFeignClient;
    @GetMapping("/getRole")
    public List<RoleRight> findByRoleId(@RequestParam Long roleId){
        return roleRightFeignClient.findByRoleId(roleId);
    }
}
