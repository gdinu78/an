package com.social.enums;

public enum LifeCycle {
    CREATED("CREATED"),
    APPROVED("APPROVED"),
    SILVER("SILVER"),
    GOLD("GOLD"),
    DELETED("DELETED");

    private String type;

    LifeCycle(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

}
