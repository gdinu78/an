package com.social.enums;

public enum RolEnum {
    USER("USER"),
    SUPPLIER("SUPPLIER");

    private String type;

    RolEnum(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
