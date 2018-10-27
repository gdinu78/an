package com.social.web;

import com.social.helpers.TokenHelper;
import com.social.model.Users;
import com.social.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.Arrays;

import static com.social.constants.SecurityConstants.AUDIENCE;
import static com.social.constants.SecurityConstants.CSRF_HEADER_STRING;
import static com.social.constants.SecurityConstants.CSRF_TOKEN_PREFIX;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    TokenHelper tokenHelper;


    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(UserRepository userRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody Users user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @PostMapping("/authenticate")
    public String login(@RequestBody Users user, HttpServletRequest request, HttpServletResponse response) {
        String token = tokenHelper.generateToken(user.getUsername());
        String csrf = tokenHelper.generateToken(Arrays.toString(AUDIENCE));
        Cookie cookie =new Cookie(CSRF_HEADER_STRING, token);
        cookie.setHttpOnly(true);
        response.addCookie(cookie);
        response.addHeader(CSRF_HEADER_STRING, CSRF_TOKEN_PREFIX + csrf);
        return "ok";
    }
}
