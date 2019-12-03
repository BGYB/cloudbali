package com.bali.common.filter;

import com.bali.common.config.RedisUtil;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class TokenFilter extends ZuulFilter {
    @Autowired
    private RedisUtil redisUtil;

    @Override
    public String filterType() {
        return FilterConstants.PRE_TYPE;
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    @Override
    public boolean shouldFilter() {
        RequestContext requestContext = RequestContext.getCurrentContext();
        HttpServletRequest request = requestContext.getRequest();
        String path = request.getRequestURI();
        if (path.startsWith("/user/checkboolean")||path.startsWith("/user/DrawImage")||path.startsWith("/user/doload")|| path.startsWith("/user/deleteUser")|| path.startsWith("/user/NewUser")|| path.startsWith("/product/finAll")|| path.startsWith("/product/FinChildTypeAll")|| path.startsWith("/product/addBuyList")|| path.startsWith("/product/finBuyList")) {
            return false; //如果是登录,那么不用验证token
        }else{
            return true;
        }
    }

    @Override
    public Object run() throws ZuulException {
        RequestContext context = RequestContext.getCurrentContext();
        HttpServletRequest request = context.getRequest();
        HttpServletResponse response =  context.getResponse();
        String token = request.getHeader("token");
        try {
            response.setContentType("text/html;charset=UTF-8");
            response.setCharacterEncoding("UTF-8");
            if (token == null || token.equals("")) {
                //应该从Redis里查询token
                context.setSendZuulResponse(false);
                context.setResponseStatusCode(401);
                response.getWriter().write("token 不存在");
            }else{
                System.out.println(token);
                if(redisUtil.hasKey(token)){
                    System.out.println("可以通过");
                }else{
                    System.out.println("token不对");
                    context.setSendZuulResponse(false);
                    context.setResponseStatusCode(402);
                    response.getWriter().write("token 不对,Redis中没有!");
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
