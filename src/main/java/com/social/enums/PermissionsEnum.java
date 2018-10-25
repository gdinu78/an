package com.social.enums;

public enum PermissionsEnum {
    LOW("Low"),
    AVERAGE("Average"),
    HIGH("High");

    private String type;

    PermissionsEnum(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
