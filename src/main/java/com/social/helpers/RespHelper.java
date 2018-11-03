package com.social.helpers;


import org.json.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class RespHelper {

    public void sendOk(HttpServletResponse resp, Object body){
        Map resMap = new HashMap();
        resMap.put("rc", 0);
        resMap.put("message", "OK");
        resMap.put("results",body);
        JSONObject jsonObject = new JSONObject(resMap);
        try {
            resp.getWriter().print(jsonObject);
        } catch (IOException e) {
            e.printStackTrace();
        }
        resp.setContentType(MediaType.APPLICATION_JSON_VALUE) ;
    }
}
