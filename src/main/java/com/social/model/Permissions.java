package com.social.model;

import com.social.enums.PermissionsEnum;
import com.social.enums.RolEnum;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "permissions")
public class Permissions {
    private Long id;
    private PermissionsEnum permisson;
    private Roles role;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PermissionsEnum getPermisson() {
        return permisson;
    }

    public void setPermisson(PermissionsEnum permisson) {
        this.permisson = permisson;
    }

    @ManyToOne
    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }
}
