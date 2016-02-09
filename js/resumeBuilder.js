/*

 $("#main").append("Joanne T. Yeung");

 var awesomeThoughts = "I am Joanne and I am AWESOME!";
 console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

$("#main").append(funThoughts);


Notes:
["Bracket Notation"]
Dot.Notation
"object": "literal notation"


 */

 var formattedName = HTMLheaderName.replace("%data%", "Joanne T. Yeung");
 var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);



var bio = {
	"name": "Joanne Yeung",
	"role": "Software Engineer",
	"contact": {
		"email": "jttyeung@gmail.com",
		"github": "jttyeung",
		"location": "San Francisco"
	},
	"welcome": "Hi, I'm Joanne. Welcome to my resume page.",
	"skills": ["JavaScript", "SQL", "GitHub"],
	"picture": "../images/profilepic.png"
};

var work = {
	"jobs": [
	{
		"position": "Senior Business Analyst",
		"employer": "Advisory Board Company",
		"years": "April 2014 - Present",
		"city": "San Francisco"
	},
	{
		"position": "Associate Project Manager",
		"employer": "Bracket Global",
		"years": "Oct 2011 - Sept 2013",
		"city": "San Francisco"
	}
	]
};

var education = {
	"schools":
	{
		"name": "University of California, Berkeley",
		"city": "Berkeley",
		"major": "Molecular & Cell Biology",
		"gradYear": 2008,
		"url": "https://berkeley.edu"
	},
	"onlineCourses": [
	{
		"school": "Codecademy",
		"title": "Javascript",
		"dates": 2016,
		"url": "https://codecademy.com"
	},
	{
		"name": "Udacity",
		"city": "online",
		"major": "GitHub",
		"gradYear": 2016,
		"url": "https://udacity.com"
	},
	{
		"name": "Udacity",
		"city": "online",
		"major": "JavaScript Basics",
		"gradYear": 2016,
		"url": "https://udacity.com"
	}
	]
};

