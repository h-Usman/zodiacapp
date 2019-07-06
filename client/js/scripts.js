var zodiacs = [
{
	name: "Aries",
	image: "images/aries.png",
	month: "March-21 Aprial-20",
	description: "Aries in Urdu - Aries Star Details in Urdu, Information about Burj Hamal, Details about Aries Personality, Woman, Man, Girl, Boy & Child. Find suitable Aries stone, lucky stones, gemstone, lucky number, Lucky day and Date. Details about parents and as wife and husband, also information about Love life and lover.",
},
{
	name:"Taurus",
	image: "images/taurus.png",
	month: "April 20 to May 20",
	description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.",
},{
	name:"Gemini",
	image: "images/gemini.png",
	month: "May 20 to June 20",
	description: "Gemini is the third astrological sign in the zodiac, originating from the constellation of Gemini. It is a positive mutable sign. Under the tropical zodiac, the sun transits this sign between about May 21 and June 21. Gemini is represented by the twins Castor and Pollux, known as the Dioscuri",
},{
	name: "Cancer",
	image: "images/cancer.png",
 	month: "June 20 to July",
 	description: "Those who are born from approximately June 22 to July 22 are born under Cancer. Individuals born during these dates, depending on which system of astrology they subscribe to, may be called 'Cancerians.' Cancer is a northern sign and its opposite sign is Capricorn.",
},
{
	name: "Leo",
	image: "images/leo.png",
	month: "July 20 to August 23",
	description:"People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their 'king of the jungle' status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.",
},
{
	name:  "Virgo",
	image: "images/virgo.png",
	month: "August 22 to September 23",
	description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.",

},
{
 name: "Libra",
 image: "images/libra.png",
 month: "23 September to 22 October",
 description: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible",
},
{
	name:"Scorpio",
	image: "images/scorpio.jpg",
	month: "October 23 to November 22",
	description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.",
},
{
	name:"Sagittarius",
	image: "images/sag.jpg",
	month: "November 23 to December 21",
	description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.",
},
{
	name: "Capricorn",
	image: "images/capricorn.jpg",
	month: "December 22 to January 19",
	description: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise.",
},
{
	name: "Aquarius",
	image: "images/aquarius.png",
	month: "January 20 Februry 18",
	description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.",
},
{
	name: "Pieces",
	image: "images/pieces.jpg",
	month: "Februry 19 to 20 March",
	description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.",
}
]

function getData(){
	var userSearch = document.getElementById('user-search').value.toLowerCase();
	for (var i = 0; i < zodiacs.length; i++){
		 if(userSearch === zodiacs[i].name.toLowerCase()){
		 	document.getElementById('name').innerHTML = zodiacs[i].name;
		 	document.getElementById('date').innerHTML = zodiacs[i].month;
		 	document.getElementById('img').src = zodiacs[i].image;
		 	document.getElementById('text-result').innerHTML = zodiacs[i].description;
		 }
	}
}















// function getAlerted(){
// var person1 = {name:'Usman', age:26, location:'Lahore', graduated:true};

// var person2 = {name:'Ali', age:25, location:'Gujranwal', graduated:false};

// var person3 = {name:'Rizwan', age:28, location:'okara', graduated:true};


// var people = [person1,person2,person3];

// 	for (var i = 0; i < people.length; i++) {
// 		if(people[i].graduated == true){
// 			document.getElementById('demo').innerHTML += people[i].name + ' ' +' is graduated' + '<br>';
// 		}else{
// 			document.getElementById('demo').innerHTML +=people[i].name + ' ' +	' is not graduated' + '<br>';	}
// 	}
// }
