package com.social.enums;

public enum Gender {
    MALE("MALE"),
    FEMALE("FEMALE");

    private String type;

    Gender(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

}
