package com.bali.common.service;


import com.bali.common.UserInfo;
import com.bali.common.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserService {

    @Autowired
    UserMapper userMapper;


    @GetMapping("/doLoig") //
    public UserInfo loadUser(@RequestParam String userName,@RequestParam String userPwd){
        return userMapper.loadUser(userName,userPwd);
    }

}
