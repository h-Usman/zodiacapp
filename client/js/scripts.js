function getAlerted(){
var person1 = {name:'Usman', age:26, location:'Lahore', graduated:true};

var person2 = {name:'Ali', age:25, location:'Gujranwal', graduated:false};

var person3 = {name:'Rizwan', age:28, location:'okara', graduated:true};


var people = [person1,person2,person3];

	for (var i = 0; i < people.length; i++) {
		if(people[i].graduated == true){
			document.getElementById('demo').innerHTML += people[i].name + ' ' +' is graduated' + '<br>';
		}else{
			document.getElementById('demo').innerHTML +=people[i].name + ' ' +	' is not graduated' + '<br>';	}
	}
}