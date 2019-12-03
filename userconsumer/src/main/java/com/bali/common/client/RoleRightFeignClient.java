package com.bali.common.client;

import com.bali.common.RoleRight;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "userprovider")
public interface RoleRightFeignClient {
    //根据RoleId查询对应的权限
    @GetMapping("/getRoleRights")
    List<RoleRight> findByRoleId(@RequestParam Long roleId);
}
