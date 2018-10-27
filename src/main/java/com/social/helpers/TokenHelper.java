package com.social.helpers;

import com.social.model.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.security.Key;
import java.security.KeyFactory;
import java.util.Base64;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;

import io.jsonwebtoken.impl.crypto.MacProvider;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import static com.social.constants.SecurityConstants.*;


@Component
public class TokenHelper {

    protected final Log LOGGER = LogFactory.getLog(getClass());

    private SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS512;  // JWT Algorithm for encryption


    public Date getIssuedAtDateFromToken(String token) {
        Date issueAt;
        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            issueAt = claims.getIssuedAt();
        } catch (Exception e) {
            LOGGER.error("Could not get IssuedDate from passed token");
            issueAt = null;
        }
        return issueAt;
    }

    public String getAudienceFromToken(String token) {
        String audience;
        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            audience = claims.getAudience();
        } catch (Exception e) {
            LOGGER.error("Could not get Audience from passed token");
            audience = null;
        }
        return audience;
    }

    public String getUsernameFromToken(String token){
        String user;
        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            user = claims.getSubject();
        } catch (Exception e) {
            LOGGER.error("Could not get User from passed token");
            user = null;
        }
        return user;
    }

    public String refreshToken(String token) {
        String refreshedToken;
        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            Key key = MacProvider.generateKey(SIGNATURE_ALGORITHM);
            claims.setIssuedAt(new Date());
            refreshedToken = Jwts.builder()
                    .setClaims(claims)
                    .setExpiration(generateExpirationDate())
                    .signWith( SIGNATURE_ALGORITHM, key )
                    .compact();
        } catch (Exception e) {
            LOGGER.error("Could not generate Refresh Token from passed token");
            refreshedToken = null;
        }
        return refreshedToken;
    }

    public String generateToken(String username) {
        String audience = AUDIENCE.toString();
        Key key = MacProvider.generateKey(SIGNATURE_ALGORITHM);
        return Jwts.builder()
                .setIssuer( APP_NAME )
                .setSubject(username)
                .setAudience(audience)
                .setIssuedAt(new Date())
                .setExpiration(generateExpirationDate())
                .signWith( SIGNATURE_ALGORITHM, key)
                .compact();
    }



    private Claims getAllClaimsFromToken(String token) {
        Claims claims;
        Key key = MacProvider.generateKey(SIGNATURE_ALGORITHM);
        try {
            claims = Jwts.parser()
                    .setSigningKey(key)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            LOGGER.error("Could not get all claims Token from passed token");
            claims = null;
        }
        return claims;
    }

    private Date generateExpirationDate() {
        return new Date(new Date().getTime() + EXPIRATION_TIME );
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        Users user = (Users) userDetails;
        final String username = getUsernameFromToken(token);
        final Date created = getIssuedAtDateFromToken(token);
        return (
                username != null &&
                        username.equals(userDetails.getUsername())
        );
    }

    private Boolean isCreatedBeforeLastPasswordReset(Date created, Date lastPasswordReset) {
        return (lastPasswordReset != null && created.before(lastPasswordReset));
    }

    public String getToken( HttpServletRequest request ) {
        /**
         *  Getting the token from Authentication header
         *  e.g Bearer your_token
         */
        String authHeader = getAuthHeaderFromHeader( request );
        if ( authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }

        return null;
    }

    public String getAuthHeaderFromHeader( HttpServletRequest request ) {
        return request.getHeader(CSRF_HEADER_STRING);
    }

}
