package com.social.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.social.helpers.TokenHelper;
import com.social.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import javax.servlet.FilterChain;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

import static com.social.constants.SecurityConstants.*;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Autowired
    TokenHelper tokenHelper;

    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
            Users creds = new ObjectMapper()
                    .readValue(req.getInputStream(), Users.class);

            /// de luat rolul din baza pt mai jos

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getUsername(),
                            creds.getPassword(),
                            Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"))));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth){

        String token = tokenHelper.generateToken(((Users)auth.getPrincipal()).getUsername());
        String csrf = tokenHelper.generateToken(AUDIENCE.toString());
        Cookie cookie =new Cookie(CSRF_HEADER_STRING, token);
        cookie.setHttpOnly(true);
        res.addCookie(cookie);
        res.addHeader(CSRF_HEADER_STRING, CSRF_TOKEN_PREFIX + csrf);
    }
}
