package com.social.web;

import com.social.model.SuppliersDetails;
import com.social.service.DataService;
import com.social.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/suppliers")
public class SuppliersController {
    @Autowired
    SupplierRepository supplierRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    DataService dataService;

    @RequestMapping(path="/search",method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String,Object> signUp(@RequestBody SuppliersDetails supplier) {
        List<SuppliersDetails> resList = dataService.getSuppliersByModel(supplier);
        Map result=new HashMap<String,Object>();
        resList.add(supplier);
        result.put("rc",0);
        result.put("message","OK");
        result.put("count",resList.size());
        result.put("results",resList);
       return result;
    }
}
