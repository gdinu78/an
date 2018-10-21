package com.social.model;

import com.social.enums.LifeCycle;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.Set;

@Entity
@Table(name = "usersDetails")
public class UsersDetails {
    private int usersDetailsId;
    private Users user;
    private ZonedDateTime memeberSince;
    private ZonedDateTime lastActive;
    private Set<Location> locations;
    private Set<Logins> logins;
    private String gender;
    private String heading;
    private String birthDate;
    private String lifestyle;
    private String netWorth;
    private String annualIncome;
    private String height;
    private String bodyType;
    private String ethnicity;
    private String hairColor;
    private String occupation;
    private String education;
    private String relationship;
    private String children;
    private String smoking;
    private String drinking;
    private String language;
    private Set<Picture> pics;
    private String location;
    private String descrAboutME;
    private String descrLookingFor;
    private String descrLookingForMore;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getUsersDetailsId() {
        return usersDetailsId;
    }

    public void setUsersDetailsId(int usersDetailsId) {
        this.usersDetailsId = usersDetailsId;
    }

    @OneToOne
    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public ZonedDateTime getMemeberSince() {
        return memeberSince;
    }

    public void setMemeberSince(ZonedDateTime memeberSince) {
        this.memeberSince = memeberSince;
    }

    public ZonedDateTime getLastActive() {
        return lastActive;
    }

    public void setLastActive(ZonedDateTime lastActive) {
        this.lastActive = lastActive;
    }

    @OneToMany(mappedBy = "user_loc")
    public Set<Location> getLocations() {
        return locations;
    }

    public void setLocations(Set<Location> locations) {
        this.locations = locations;
    }

    @OneToMany(mappedBy = "user_login")
    public Set<Logins> getLogins() {
        return logins;
    }

    public void setLogins(Set<Logins> logins) {
        this.logins = logins;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getLifestyle() {
        return lifestyle;
    }

    public void setLifestyle(String lifestyle) {
        this.lifestyle = lifestyle;
    }

    public String getNetWorth() {
        return netWorth;
    }

    public void setNetWorth(String netWorth) {
        this.netWorth = netWorth;
    }

    public String getAnnualIncome() {
        return annualIncome;
    }

    public void setAnnualIncome(String annualIncome) {
        this.annualIncome = annualIncome;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getBodyType() {
        return bodyType;
    }

    public void setBodyType(String bodyType) {
        this.bodyType = bodyType;
    }

    public String getEthnicity() {
        return ethnicity;
    }

    public void setEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
    }

    public String getHairColor() {
        return hairColor;
    }

    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public String getChildren() {
        return children;
    }

    public void setChildren(String children) {
        this.children = children;
    }

    public String getSmoking() {
        return smoking;
    }

    public void setSmoking(String smoking) {
        this.smoking = smoking;
    }

    public String getDrinking() {
        return drinking;
    }

    public void setDrinking(String drinking) {
        this.drinking = drinking;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescrAboutME() {
        return descrAboutME;
    }

    public void setDescrAboutME(String descrAboutME) {
        this.descrAboutME = descrAboutME;
    }

    public String getDescrLookingFor() {
        return descrLookingFor;
    }

    public void setDescrLookingFor(String descrLookingFor) {
        this.descrLookingFor = descrLookingFor;
    }

    public String getDescrLookingForMore() {
        return descrLookingForMore;
    }

    public void setDescrLookingForMore(String descrLookingForMore) {
        this.descrLookingForMore = descrLookingForMore;
    }

    @OneToMany(mappedBy="user")
    public Set<Picture> getPics() {
        return pics;
    }

    public void setPics(Set<Picture> pics) {
        this.pics = pics;
    }
}
