package com.bali.common;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient //注册服务
@MapperScan("com.bali.common.mapper") //扫描mapper文件中接口，类似于dao
public class UserproviderApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserproviderApplication.class, args);
    }


}
