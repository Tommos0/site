//hello
//line2
console.log('test');
//Ok this seems to be working!
//I wrote a small peace of code that displays everything that I type here.
//But not only that - I'm also executing this as code in your browser!
//This is why everything is starting with two slashes - this code is never executed//
//Let's make something happen though!
//First let me pull something in called jQuery, it basically makes my life a little easier
var script = document.createElement('script'); script.src = 'https://code.jquery.com/jquery-3.2.1.min.js'; document.body.appendChild(script);
//Ok that should load it! I have to wait a little bit to make sure it is loaded though, so please wait a little.
//1
//2
//3 for the slow connections!
//for the programmers - it's probably better to have an onLoad handler for when the script is loaded
//But i'm lazy like that.
//OK let's see if I can make this text go red!
$("#content").css('color' , 'red');
//Seems fine! I have to do something about the display, maybe your screen is getting full of text..
//I can modify the function the displays my texts a little:
//It is currently this:
//processLine = function (lineNumber) {
//    var par = document.createElement('p');
//    var t = document.createTextNode(lines[lineNumber]);
//    par.appendChild(t);
//    document.getElementById('content').appendChild(par);
//    eval(lines[lineNumber]);
//    if (lineNumber + 1 < lines.length) window.setTimeout(function () { processLine(lineNumber + 1)}, 500); };
// });
processLine = function (lineNumber) { var duration = lines[lineNumber].split("|")[0];var code = lines[lineNumber].slice(duration.length+1);$("#content").html(code); eval(code); if (lineNumber + 1 < lines.length) window.setTimeout(function () {processLine(lineNumber + 1)}, parseInt(duration));};
2000|//i hope this is still working :)
2000|//Took me a bit to get this to work but I'm back in business and I have a new thing to play with,
200|//I
200|//Can
200|//Go
200|//Really
1000|//Fast
3000|//Or...
3000|//Really...
3000|//Slow...
1|//1000|$('body').css({'background-color':'#555', 'width':'100%', 'height':'100%'}); //dark background
//If you're interested: this is the html that is loaded and that loads this file:
5000|var xhttp = new XMLHttpRequest();xhttp.onreadystatechange = function () {if (this.readyState == 4 && this.status == 200) {$("#content").css('white-space','pre').text(this.response);}};xhttp.open("GET", "index.html", true); xhttp.send();
5000|//and the rest is this file (I wonder if I can fetch my own code?)
15000|var xhttp = new XMLHttpRequest();xhttp.onreadystatechange = function () {if (this.readyState == 4 && this.status == 200) {$("#content").css('white-space','pre').text(this.response);}};xhttp.open("GET", "program.js", true); xhttp.send();
3000|//OK, it's about time to make a real website..
1000|//Hello there!
1000|//I'm back - this is my second evening already working on this thing.
1000|//Feeling a bit strange about typing messages to my computer :).
1000|//I was thinking about a couple of things for this website...
1000|//
1000|//First
1000|//Why am I even writing this thing?
1000|//It's strange now typing to a screen.
1000|//I think my idea is to publicize it somewhere.
1000|//So I will rent some server space to host it.
1000|//
1000|//Second
1000|//I wonder if somebody will ever read this?
1000|//But if you are -
1000|//So for I've only been talking to you
1000|//I will make an input field in which you can type something back to me!
1000|//
1000|//Third
1000|//This website needs a name
1000|//I decided on something simple -
1000|//The website will be named after its assigned IP address
1000|//This way I also don't need a domain name :).
1000|//
1000|//Fourth
1000|//I want to do something fancy for these messages
1000|//
1000|//Ok I've got the server! This means that the name of the website is from now on 35.160.143.3
document.title = '35.160.143.3';

