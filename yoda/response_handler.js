// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];



function respond() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    h = "m"
    document.getElementById("demo1").innerHTML= "h" + h.repeat(getRandomInt(1,100));

    var input = document.getElementById("fname").value;
    console.log(input);

    if ((input.includes("cute") || input.includes("baby")) && input.includes("force") && input.includes("dark")) {
        document.getElementById('im').src='img/cute-dark.jpg';
        document.getElementById("demo").innerHTML="";
    }
    else if ((input.includes("cute") || input.includes("baby")) && input.includes("force")) {
        document.getElementById('im').src='img/cute-force.jpg';
        document.getElementById("demo").innerHTML="";
    }
    else if ((input.includes("cute") || input.includes("baby")) && input.includes("dark")) {
        document.getElementById('im').src='img/cute-dark.jpg';
        document.getElementById("demo").innerHTML="";
    }
    else if (input.includes("cute") || input.includes("baby")) {
        document.getElementById('im').src='img/cute-std.jpg';
        document.getElementById("demo").innerHTML="";
    }
    else if (input.includes("dark") && input.includes("force")) {
        document.getElementById('im').src='img/regular-dark.jpg';

        document.getElementById("demo").innerHTML="Once you start down the dark path, forever will it dominate your destiny, consume you it will. In a dark place we find ourselves, and a little more knowledge lights our way. Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Always two there are, no more, no less. A master and an apprentice. In the end, cowards are those who follow the dark side.";
        
    }
    else if (input.includes("dark")) {
        document.getElementById('im').src='img/regular-dark.jpg';
        
        document.getElementById("demo").innerHTML="Once you start down the dark path, forever will it dominate your destiny, consume you it will. In a dark place we find ourselves, and a little more knowledge lights our way. Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Always two there are, no more, no less. A master and an apprentice. In the end, cowards are those who follow the dark side.";      
    }
    else if (input.includes("force")) {
        document.getElementById('im').src='img/regular-force.jpg';
        
        document.getElementById("demo").innerHTML="Luminous beings are we, not this crude matter. A Jedi uses the Force for knowledge and defense, never for attack. Clear your mind must be, if you are to find the villains behind this plot. The force. Life creates it, makes it grow. Its energy surrounds us and binds us. My ally is the Force, and a powerful ally it is.";
    }
    else {
        document.getElementById('im').src='img/regular-std.jpg';
        
        document.getElementById("demo").innerHTML="Patience you must have, my young padawan. When nine hundred years old you reach, look as good you will not. No! Try not! Do or do not, there is no try. Judge me by my size, do you? Difficult to see. Always in motion is the future...";
    }
    document.getElementById("fname").value = "";
}