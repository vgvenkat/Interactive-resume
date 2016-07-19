/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
     name : "Venkat Ganesan",
     role : "Product Developer",
     contacts : {
         mobile : "email_me_for_this",
         email : "vgkrish619@gmail.com",
         github : "https://github.com/vgvenkat",
         twitter : "https://twitter.com/vgkrish",
         location : "Bay Area, CA"
     },
     welcomeMessage : "Hey There! Nice to see your interest in my profile.🎓",
     skills : ["web developement", "occassional mobile app development"],
     biopic : "_insert_pic_here_",
     display : function() {

     }
 };

 var education = {
     schools : [ {
         name : "SJSU",
         location : "San Jose, CA",
         degree : "Masters",
         majors : ["Software Engineering"],
         dates : "2012 - 2014",
         url : "www.sjsu.edu"
     }],
     onlineCourses : [{
         title : "Front-end Web Developer Nanodegree",
         school : "Udacity",
         dates : "April 2016 - August 2016",
         url : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     }],
        display : function() {

     }
 };

var projects = {
    projects : [ {
        "title" : "Interactive resume",
        "dates" : "July 2016 - July 2016",
        "description" : "This is an interactive resume experiment.",
        "images" : [""]
    }],
    display : function() {

    }
}

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(HTMLheaderName).append(HTMLheaderRole);
