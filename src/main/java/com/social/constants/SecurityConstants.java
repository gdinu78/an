package com.social.constants;

public class SecurityConstants {
//    public static final String SECRET = "MIAUmiau86";
    public static final String APP_NAME = "SocDtApp";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String CSRF_TOKEN_PREFIX = "xsrfToken ";
    public static final String CSRF_HEADER_STRING = "XSRF-TOKEN";
    public static final String SIGN_UP_URL = "/users/authenticate";
    public static final String RESOURCES_URL = "/resources/**";
    public static final String LANDINGPAGE_URL = "/";
    public static final String HOME_URL = "/home";
    public static final String REGISTER_URL = "/register";
    public static final String LOGIN_URL = "/login";
    public static final String WELCOME_URL = "/welcome";
    public static final String SERVICES_ROOT_URL = "/api/**";
    public static final String[] AUDIENCE = {"http://localhost:8080","http://localhost:4200"};
    public static final String ANGULAR_MAIN = "/main.js";
    public static final String ANGULAR_POLYFILLS = "/polyfills.js";
    public static final String ANGULAR_RUNTIME = "/runtime.js";
    public static final String ANGULAR_SCRIPTS = "/scripts.js";
    public static final String ANGULAR_STYLES = "/styles.js";
    public static final String ANGULAR_VENDOR = "/vendor.js";

}
