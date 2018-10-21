package com.social.model;

import com.social.enums.RolEnum;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")
public class Roles {
    private int id;
    private RolEnum roleName;
    private Set<Users> users;
    private Set<Permissions> permissions;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RolEnum getName() {
        return roleName;
    }

    public void setName(RolEnum name) {
        this.roleName = name;
    }

    public RolEnum getRoleName() {
        return roleName;
    }

    public void setRoleName(RolEnum roleName) {
        this.roleName = roleName;
    }

    @ManyToMany(mappedBy = "roles")
    public Set<Users> getUsers() {
        return users;
    }

    public void setUsers(Set<Users> users) {
        this.users = users;
    }

    @OneToMany(mappedBy = "role")
    public Set<Permissions> getPermissions() {
        return permissions;
    }

    public void setPermissions(Set<Permissions> permissions) {
        this.permissions = permissions;
    }
}
