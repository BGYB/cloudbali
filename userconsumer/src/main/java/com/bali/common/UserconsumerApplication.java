package com.bali.common;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient //开启Eureka注册
@EnableFeignClients  //开启Feign
public class UserconsumerApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserconsumerApplication.class, args);
    }

}
