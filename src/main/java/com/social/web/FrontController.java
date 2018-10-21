package com.social.web;

import com.social.model.Menus;
import com.social.repository.MenuRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@RestController
@Controller
public class FrontController {
    @Autowired
    MenuRepository menuRepository;

    @RequestMapping(value="/api/getNavItems")
    public void getNavItems(HttpServletResponse resp) {
        List<Menus> menus = menuRepository.fetchByType("header");
        JSONArray jsonArray = new JSONArray();
        JSONObject jsonObject;
        Map resMap;
        for (Menus oneMenu: menus) {
            resMap = new HashMap();
            resMap.put("name", oneMenu.getMenu_name());
            resMap.put("prio", oneMenu.getPosition());
            jsonObject = new JSONObject(resMap);
            jsonArray.put(jsonObject);
        }
        resMap = new HashMap();
        resMap.put("rc", 0);
        resMap.put("message", "OK");
        resMap.put("results",jsonArray);
        jsonObject = new JSONObject(resMap);
        try {
            resp.getWriter().print(jsonObject);
        } catch (IOException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/json") ;
    }
}
