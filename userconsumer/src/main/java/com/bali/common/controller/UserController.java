package com.bali.common.controller;

import com.bali.common.UserInfo;
import com.bali.common.client.UserFeignClient;
import com.bali.common.config.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class UserController {

    @Autowired
    UserFeignClient userFeignClient;
    @Autowired
    RedisUtil redisUtil;

    @GetMapping("/doload")
    public UserInfo loadUser(@RequestParam String userName, @RequestParam String userPwd){
        UserInfo userInfo=userFeignClient.doload(userName,userPwd);
        //如果不等于null说明登录成功,放入redis -- token
        if(userInfo!=null){
            String tokenId="TOKEN-USER-"+ UUID.randomUUID().toString().replace("-","").toUpperCase();
            System.out.println(tokenId+"密钥+++++++++++++");
            userInfo.setTokenId(tokenId);
            redisUtil.set(tokenId,userInfo,1800); //调用Redis工具类设置超时时间
        }
        return userInfo;
    }
}
