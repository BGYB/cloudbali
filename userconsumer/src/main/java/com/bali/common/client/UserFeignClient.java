package com.bali.common.client;

import com.bali.common.RoleRight;
import com.bali.common.UserInfo;
import com.netflix.hystrix.HystrixCircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "userprovider") //关联userprovider
public interface UserFeignClient {

    @GetMapping("/doLoig")//与userprovider中的UserController中拦截请求一致
    UserInfo doload(@RequestParam String userName,@RequestParam String userPwd);
}
