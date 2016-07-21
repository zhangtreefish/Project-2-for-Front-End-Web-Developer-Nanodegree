var bio = {
    "name": "Shuyu (Susie) Zhang",
    "role": "web developer, instructor, scientist",
    "contacts": {
        "phone": "210-479-2565",
        "email": "zhangtreefish@yahoo.com",
        "gitHub": "https://github.com/zhangtreefish",
        "portfolio": "https://zhangtreefish.github.io/ng2-portfolio/",
        "twitter":"zhangtreefish",
        "location": "San Antonio"
    },
    "welcomeMessage": "Welcome! Now get off the desk and do 10 jumping jacks!",
    "skills": [
        "front-end and full stack web development",
        "design and instruction of science courses",
        "microbiological research"
    ],
    "biopic": "http://i.imgur.com/5r0DB0H.jpg",
    displayBio: function() {
        var formattedPicture=HTMLbioPic.replace("%data%",bio.biopic);
        $("#header").append(formattedPicture);
        var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
        $("#header").prepend(formattedRole);
        var formattedName=HTMLheaderName.replace("%data%",bio.name);
        $("#header").prepend(formattedName);
        var formattedContact=HTMLcontactGeneric.replace("%data%",bio.contacts.phone);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
        var formattedGithub=HTMLgithub.replace(/%data%/g,bio.contacts.gitHub);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedPortfolio=HTMLportfolio.replace(/%data%/g,bio.contacts.portfolio);
        $("#topContacts").append(formattedPortfolio);
        $("#footerContacts").append(formattedPortfolio);
        var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedTwitter=HTMLtwitter.replace(/%data%/g,bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#header").append(HTMLskillsStart);
        var num=bio.skills.length;
        if (num>0) {
            for (var j=0; j<num; j++){
                var formattedSkill=HTMLskills.replace("%data%",bio.skills[j]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};
bio.displayBio();

var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Technical Intern",
            "location": "Dallas",
            "dates": "July 2015 - September 2015",
            "description": "front-end web development using AngularJS"
        },
        {
            "employer": "Our Lady of the Lake University",
            "title": "adjunct lecturer of biology",
            "location": "San Antonio",
            "dates": "January 2015 - May 2015",
            "description": "instruction of Introduction to Biology lab session"
        },
        {
            "employer": "Hallmark University",
            "title": "instructor of general education",
            "location": "San Antonio, Texas",
            "dates": "June 2011-October 2014",
            "description": "Design and instruction of courses including Microbiology, Anatomy and Physiology, Nutrition and Wellness"
        },
        {
            "employer": "University of Texas Health Science Center at San Antonio",
            "title": "postdoctoral fellow/research instructor",
            "location": "San Antonio, Texas",
            "dates": "September 1998 to March 2006",
            "description": "Investigation of general stress response of Bacillus subtilis; cancer and DNA repair"
        },
        {
            "employer": "East Harbor Co.",
            "title": "staff",
            "location": "Jinan",
            "dates": "August 1991 to December 1991",
            "description": "responsible for business operation"
        }
    ],
    displayWork: function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
            var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedLocation+formattedDates+formattedDescription)
        }
    }
};
work.displayWork();

var projects = {
    "projects": [
        // {
        //     "title": "San Antonio Retirement Homes",
        //     "dates": "2014-2015",
        //     "description": "A retirement home application with interactive map and search list with KnockoutJS",
        //     "image": "http://i.imgur.com/ztDG76q.jpg",
        //     "url": "http://zhangtreefish.github.io/Project-5-for-Front-End-Web-Developer-Nanodegree"
        // },
        {
            "title": "therapeutic foods",
            "dates": "2016-2016",
            "description": "A Flask web app hosted in Amazon Web Service using Apache HTTP Server and PostgreSQL on Ubuntu system",
            "image": "http://i.imgur.com/dd4d0fr.png",
            "url": "http://ec2-52-38-199-253.us-west-2.compute.amazonaws.com/"
        },
        {
            "title": "a Frogger game with a immunology twist",
            "dates": "2015-2015",
            "description": "Implemented a Frogger game using Object-Oriented javaScript and HTML5 Canvas",
            "image": "http://i.imgur.com/TMw9w29.png",
            "url": "https://zhangtreefish.github.io/Project-3-for-Front-End-Web-Developer-Nanodegree"
        }
    ],
    displayProjects: function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            formattedTitle=formattedTitle.replace("#",projects.projects[project].url);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].image);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
projects.displayProjects();

var education = {
    "schools": [
        {
            "name": "Udacity",
            "location": "Mountain View",
            "major": "Full Stack and Front-End Web Development",
            "degree": "Full Stack Nanodegree, Front-End Nanodegree",
            "dates": "Janurary 2015-May 2016",
            "url": "https://www.udacity.com"
        },
        {
            "name": "Hallmark University",
            "location": "San Antonio",
            "major": "Global Management",
            "degree": "MBA",
            "dates": "May 2013-June 2014",
            "url": "http://www.hallmarkuniversity.edu"
        },
        {
            "name": "University of Texas at Austin",
            "location": "Austin",
            "major": "Microbiology",
            "degree": "Ph.D.",
            "dates": "Januarary 1992-August 1998",
            "url": "http://www.utexas.edu"
        },
        {
            "name": "Tsinghua University",
            "location": "Beijing",
            "major": "B.S.in Biological Sciences and Biotechnology",
            "degree": "B.S.",
            "dates": "September 1986-July 1991",
            "url": "http://www.tsinghua.edu.cn/publish/newthuen/index.html"
        }
    ],
    displayEducation: function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
            formattedName=formattedName.replace("#", education.schools[school].url);
            $(".education-entry:last").append(formattedName);
            var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
            $(".education-entry:last").append(formattedMajor);
        }
    }
};
education.displayEducation();

$(document).click(function(loc) {
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);// your code goes here
});

function locationizer(work_obj) {
    var workLocations=[];
    for (job in work.jobs) {
        locationArray.push(work_obj.jobs[job].location);
    }
    return locationArray;
}

function inName(twoNames) {
    var newName=twoNames.trim().split(" ");
    var nameOne=newName[0].slice(0,1).toUpperCase()+newName[0].slice(1).toLowerCase();
    var nameTwo=newName[1].toUpperCase();
    return nameOne+" "+nameTwo;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
//var formattedLink = $('<div> <a href="http://www.onetreefish.com/"> </a> Website </div>');
//$(".project-entry:last").append(formattedLink);
$("#header").css("background-color","teal");
$("#projects").css("background-color","#fc0");
//var myHeading = document.querySelector('h2');
//myHeading.innerHTML = 'Hello world!';
//alert("May the peace be with you");
