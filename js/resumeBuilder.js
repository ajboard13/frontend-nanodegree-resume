/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Aaron Board";
var role = "Computer Science Student";
var skills = ["Attention to detail", 
				"Team Player", 
				"Quick and Eager Learner", 
				"Active Listener", 
				"Good Soft Skills"]
var email = "aaronjboard@live.com";
var phone = "(586)277-3962";
var github = "https://github.com/ajboard13";
var pic = "images/fry.jpg";
var welcome = "A computer science student looking to improve his knowledge and skills through a team-oriented work environment";


var bio = {
	"name":name,
	"role":role,
	"contact":{
		"email":email,
		"phone":phone,
		"github":github,
	},
	"skills": skills,
	"pic":pic
};
var work = {
	"experience":[
	{
		"position": "Radiology Aide",
		"employer":"Beaumont Hospital",
		"dates": "August 2016 - Present",
		"city" : "Royal Oak, MI",
		"currentlyEmployed":"Yes",
		"description": "Responsible for arriving X-ray appointments and transporting patients to and from the readiology department in the Emergency Center. Work with the techs to provide excellent service to the patients. Worked the midnight shifts."
	},
	{
		"position": "Server",
		"employer":"Chili's",
		"dates": "January 2015 - September 2016",
		"city" : "Warren, MI",
		"currentlyEmployed":"No",
		"description": "Responsible for taking orders and catering to the needs of the guests. Other duties include cleaning, making drinks and handling to-gos when necassary."
	},
	{
		"position": "IT Assistant",
		"employer":"Oakland University",
		"dates": "August 2014 - May 2016",
		"city" : "Auburn Hills, MI",
		"currentlyEmployed":"No",
		"description": "Responsible for assisting students in the computer lab with any computer or printer issues. Other duties include maintainence of the simulators and updating the PCs."
	},
	{
		"position": "Server",
		"employer":"Buddy's",
		"dates": "January 2016 - June 2016",
		"city" : "Warren, MI",
		"currentlyEmployed":"No",
		"description": "Responsible for taking orders and catering to the needs of the guests."
	}
	]
};
var education = {
	"schools":[
	{
		"name": "Oakland University",
		"city": "Auburn Hills, MI",
		"degree": "Major of Business Aministration",
		"graduated": "No, major changed",
		"dates": "2012-2015"
	},
	{
		"name": "Macomb Community College",
		"city": "Warren, MI",
		"degree": "Computer Science",
		"graduated": "In progress, will finish at Wayne State",
		"dates": "2012- present"
	},
	{
		"name": "Cousino High School",
		"city": "Warren, MI",
		"degree": "Diploma",
		"graduated": "Yes",
		"dates": "Class of 2012"
	}
	],
	"onlineClasses": [
	{
			"name": "JavaScript Basics",
			"site": "Udacity",
			"completed": "In progress",
			"link":"https://www.udacity.com/course/javascript-basics--ud804"
	},
	{
			"name": "Developing Android Apps",
			"site": "Udacity",
			"completed": "In progress",
			"link":"https://www.udacity.com/course/new-android-fundamentals--ud851"
	},
	{
			"name": "Swift for Begginers",
			"site": "Udacity",
			"completed": "In progress",
			"link":"https://www.udacity.com/course/swift-for-beginners--ud1022"
	}
	]
};

var projects = {
	"projects": [
	{
		"Name": "Project Sunshine",
		"Dates": "November 2016 - Present",
		"Description": "A mobile app that displays the weather, part of the 'Developing Android Apps' class on Udacity.",
		"link":"https://github.com/ajboard13"
	},
	{
		"Name": "Online Resume",
		"Dates": "November 2016 - Present",
		"Description": "An online resume for Employers to view. Part of the 'JavaScript Basics' class on Udacity.",
		"link":"https://github.com/ajboard13"
	},
	{
		"Name":"Jack the Giant",
		"Dates":"November 2016 - Present",
		"Description":"A mobile game made with the Unity game engine.",
		"link":"https://github.com/ajboard13"
	}
	]
};

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedBioPic = HTMLbioPic.replace("%data%", pic);
$("#header").append(formattedName);
$("#header").append(formattedRole);
var formattedEmail = HTMLemail.replace("%data%", email);
$("#header").append(formattedEmail);
var formattedPhone = HTMLmobile.replace("%data%", phone);
$("#header").append(formattedPhone);
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#header").append(formattedGithub);
$("#header").append(formattedBioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcome);
$("#header").append(formattedWelcome);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(skill in skills){
		var formattedSkill = HTMLskills.replace("%data%", skills[skill]);
		$("#skills").append(formattedSkill);
	};
};

work.display=function(){
if (work.experience.length > 0){
	for(exp in work.experience){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.experience[exp].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.experience[exp].position);
		var formattedDates = HTMLworkDates.replace("%data%", work.experience[exp].dates);
		var formattedCity = HTMLworkLocation.replace("%data%", work.experience[exp].city);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.experience[exp].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedCity);
		$(".work-entry:last").append(formattedDesc);
	};
};
}
$("#workExperience").append(work.display());


projects.display = function(){
if(projects.projects.length>0){
	for (var i=0; i< projects.projects.length; i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].Name).replace("#",projects.projects[i].link);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].Dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].Description);
		var formattedLink = HTMLprojectLink.replace("%data%", projects.projects[i].link);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedLink);
	};
};
}
$("#projects").append(projects.display());


education.display= function(){
if(education.schools.length>0){
	for(var i=0; i<education.schools.length;i++){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].degree);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[i].city);
		var formattedGraduated = HTMLschoolGraduated.replace("%data%", education.schools[i].graduated);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedCity);
		$(".education-entry:last").append(formattedGraduated);
	};
};

if(education.onlineClasses.length>0){
	$(".education-entry:last").append(HTMLonlineClasses);
	for(var i=0; i<education.onlineClasses.length;i++){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].name).replace("#", education.onlineClasses[i].link);
		var formattedSite = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].site);
		var formattedGraduated = HTMLschoolGraduated.replace("%data%", education.onlineClasses[i].completed);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedSite);
		$(".education-entry:last").append(formattedGraduated);
	};
};
}
$("#education").append(education.display());


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


function inName(name){
	name=name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " "+name[1];
}

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
