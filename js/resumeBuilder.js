/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Venkat Ganesan",
    role: "Web Developer",
    contacts: {
        mobile: "email_is_better",
        email: "vgkrish619_at_gmail",
        github: "https://github.com/vgvenkat",
        twitter: "https://twitter.com/vgkrish",
        location: "San Francisco"
    },
    welcomeMessage: "Hey There! Nice to see your interest in my profile.🎓",
    skills: ["web developement", "occassional mobile app development"],
    biopic: "https://s.gravatar.com/avatar/4a00ad50b74037039a24d64a1f4f8bcb?s=200",
    display: function() {
        HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(HTMLheaderRole).prepend(HTMLheaderName);


        HTMLcontactGeneric = HTMLcontactGeneric
            .replace("%contact%", "Google")
            .replace("%data%", "Venkat Ganesan");

        HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
        HTMLtwitter = HTMLtwitter.replace("%data%", "<a href=" + bio.contacts.twitter + "> @vgkrish</a>");
        HTMLgithub = HTMLgithub.replace("%data%", "<a href=" + bio.contacts.github + "> vgvenkat</a>");
        HTMLblog = HTMLblog.replace("%data%", "<a href='blog.vgvenkataraman.com'>Blog Link</a>");
        HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").append(HTMLmobile).append(HTMLemail)
            .append(HTMLtwitter).append(HTMLgithub)
            .append(HTMLblog).append(HTMLlocation);

        $("#footerContacts").append(HTMLmobile).append(HTMLemail)
            .append(HTMLtwitter).append(HTMLgithub)
            .append(HTMLblog).append(HTMLlocation);

        HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").append(HTMLbioPic).append(HTMLwelcomeMsg);

        var skillSet = "";
        bio.skills.forEach(function(skill) {
            skillSet += HTMLskills.replace("%data%", skill);
        });
        HTMLskillsStart = HTMLskillsStart.replace("%data%", skillSet);
        $("#header").append(HTMLskillsStart);

    }
};

var education = {
    schools: [{
        name: "SJSU",
        location: "San Jose, CA",
        degree: "Masters",
        majors: ["Software Engineering"],
        dates: "2012 - 2014",
        url: "www.sjsu.edu"
    }, {
        name: "Sastra University",
        location: "TN, India",
        degree: "Bachelors",
        majors: ["Information and Communication Technology"],
        dates: "2008 - 2012",
        url: "www.sastra.edu"
    }],
    onlineCourses: [{
        title: "Front-end Web Developer Nanodegree",
        school: "Udacity",
        dates: "April 2016 - August 2016",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        var schoolList = "",
            onlineList = "";
        var HTMLonlineschoolStart = HTMLschoolStart;
        education.schools.forEach(function(school) {

            schoolList += HTMLschoolName.replace("%data%", school.name);
            schoolList += HTMLschoolDegree.replace("%data%", school.degree);
            schoolList += HTMLschoolDates.replace("%data%", school.dates);
            schoolList += HTMLschoolLocation.replace("%data%", school.location);
            schoolList += HTMLschoolMajor.replace("%data%", school.majors);
        });
        HTMLschoolStart = HTMLschoolStart.replace("%data%", schoolList);
        $("#education").append(HTMLschoolStart);

        education.onlineCourses.forEach(function(course) {

            onlineList += HTMLonlineTitle.replace("%data%", course.title);
            onlineList += HTMLonlineSchool.replace("%data%", course.school);
            onlineList += HTMLonlineDates.replace("%data%", course.dates);
            onlineList += HTMLonlineURL.replace("%data%", course.url);
        });
        HTMLonlineschoolStart = HTMLonlineschoolStart.replace("%data%", onlineList);
        $("#education").append(HTMLonlineClasses).append(HTMLonlineschoolStart);
    }
};

var work = {
    jobs: [{
        employer: "Verizon",
        title: "Senior Product Developer",
        location: "Palo Alto,CA",
        dates: "September 2014 - Present",
        description: "Built interactive dashboards, webportals for big data, hybrid mobile apps."
    }, {
        employer: "VacayHero",
        title: "Full Stack Developer",
        location: "San Francisco,CA",
        dates: "July 2014 - Sepetember 2014",
        description: "Built webportals for customers and partners to upload and book room availability, scrapped CRMs to build availability calendars."
    }],
    display: function() {
        var workList = "";
        work.jobs.forEach(function(job) {
            workList += HTMLworkEmployer.replace("%data%", job.employer);
            workList += HTMLworkTitle.replace("%data%", job.title);
            workList += HTMLworkDates.replace("%data%", job.dates);
            workList += HTMLworkLocation.replace("%data%", job.location);
            workList += HTMLworkDescription.replace("%data%", job.description);
        });

        HTMLworkStart = HTMLworkStart.replace("%data%", workList);
        $("#workExperience").append(HTMLworkStart);
    }
};

var projects = {
    projects: [{
        title: "Interactive resume",
        dates: "July 2016",
        description: "This is an interactive resume experiment.",
        images: "images/interactive_resume.jpg"
    }, {
        title: "Responsive website",
        dates: "June 2016",
        description: "This is an updated responsive portfolio website.",
        images: "images/interactive_resume.jpg"
    }],
    display: function() {
        var projectList = "";
        projects.projects.forEach(function(project) {
            projectList += HTMLprojectTitle.replace("%data%", project.title);
            projectList += HTMLprojectDates.replace("%data%", project.dates);
            projectList += HTMLprojectDescription.replace("%data%", project.description);
            projectList += HTMLprojectImage.replace("%data%", project.images);

        });
        HTMLprojectStart = HTMLprojectStart.replace("%data%", projectList);
        $("#projects").append(HTMLprojectStart);
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
