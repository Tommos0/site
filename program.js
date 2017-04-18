//hello
//line2
console.log('test');
//Ok this seems to be working!
//I wrote a small peace of code that displays everything that I type here.
//But not only that - I'm also executing this as code in your browser!
//This is why everything is starting with two slashes - this code is never executed//
//Let's make something happen though!
//First let me pull something in called jQuery, it will make things little easier for me:
var script = document.createElement('script'); script.src = 'https://code.jquery.com/jquery-3.2.1.min.js'; document.body.appendChild(script);
//Ok that should load it! I have to wait a little bit to make sure it is loaded though, so please wait a little.
//1
//2
//It's probably better to have an onLoad handler for when the script is loaded
//But that's for later.
//OK let's see if I can make this text go red!
$("#content").css('color' , 'red');
//Seems fine! I have to do something about the display, maybe your screen is getting full of text..
//I can modify the function that displays my texts a little:
processLine = function (lineNumber) { var duration = lines[lineNumber].split("|")[0];var code = lines[lineNumber].slice(duration.length+1);$("#content").text(code); eval(code); if (lineNumber + 1 < lines.length) window.setTimeout(function () {processLine(lineNumber + 1)}, parseInt(duration));};
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
2000|showFile = function(fileName) { setTimeout(function() { var xhttp = new XMLHttpRequest();xhttp.onreadystatechange = function () {if (this.readyState == 4 && this.status == 200) {$("#content").css('white-space','pre').text(this.response);}};xhttp.open("GET", fileName, true); xhttp.send(); }, 2000);  }
2000|//If you're interested: this is the html that is loaded and that loads this file:
5000|showFile('index.html');
5000|//and the rest is this file (I wonder if I can fetch my own code?)
10000|showFile('program.js');
3000|//Time for some magic...
2000|loadScript = function(url) { var script = document.createElement('script'); script.src = 'url'; document.body.appendChild(script); };
5000|loadScript('https://cdn.jsdelivr.net/bluebird/latest/bluebird.min.js');
1000|typeWriter = function(text, callback) { return new Promise(function (resolve, reject) { function next(currentText, i) { window.setTimeout(function () { callback(currentText); if (i < text.length) next(currentText + text[i], i + 1); else resolve(); }, Math.random() * 100) } next('', 0) }); };
1000|display         = function(code) { return typeWriter(code, function(text) { $("#content").text(text+'_'); }) };
1000|executeCode     = function(line) { try { return eval(line) } catch (e) { if (!(e instanceof SyntaxError) && (!(e instanceof ReferenceError))) console.log(e); } };
1000|wait = function (time) { return new Promise(function (resolve, reject) { window.setTimeout(resolve, time) }) };
1000|promiseOrWait = function(p,time) { return (p instanceof Promise ? p : wait(time)); };
1000|running = true;
2000|processLine = function (lineNumber) {running = true;currentLine = lineNumber;var code = lines[lineNumber];display(code).then(function () {return promiseOrWait(executeCode(code), 1000);}).then(function() {if (running && lineNumber < (lines.length-1)) processLine(lineNumber + 1)})};
stopExecution   = function() { running = false; };
startExecution  = function(line) { processLine(typeof line === 'undefined' ? (currentLine+1) : line) };
//wait = function(time) { stopExecution(); setTimeout(startExecution,time) };
Now I have some more control!
I can stop the code from running
stopExecution(); setTimeout(startExecution, 5000)//And start again later!
I can even go back in time..
if (typeof flag === 'undefined') startExecution(currentLine - 4); if (flag) startExecution(currentLine + 3);  flag = false;
Oops - I didn't stop the execution, now there are two lines being processed at the same time..
Which is causing some problems
Let's fix that..
We're ok again!
Hello there!
I'm back - this is my second evening already working on this thing.
Feeling a bit strange about typing messages to my computer :).
I was thinking about a couple of things for this website...

First
Why am I even writing this thing?
It's strange now typing to a screen.
I think my idea is to publish it somewhere.
So I will rent some server space to host it.

Second
I wonder if somebody will ever read this?
But if you are -
So far I've only been talking to you
I will make an input field in which you can type something back to me!

Third
This website needs a name.
I decided on something simple -
The website will be named after its assigned IP address
This way I also don't need a domain name :).

Ok I've got the server! This means that the name of the website is from now on 35.160.143.3
document.title = '35.160.143.3';
We're live!
So let's make this input thing for you!
input = $('<input placeholder="Type here!"/>');
$('body').prepend(input);
button = $('<button type="button">Send</button>');
button.insertAfter(input);
There you go!
Obviously the button doesn't do anything yet.
So let's disable it for now:
button.prop('disabled',true);
and do the following
button.click(function() { sendMessage ( input.val() ) });
sendMessage = function(message) { $.ajax({url:'/server/message', type:'POST', data:message, contentType:'text/plain', dataType:'text' , success:function() { messageDone() }}); };
thankYou = '<span>Thank you!</span>';
messageDone = function() { var elmThankYou = $(thankYou); elmThankYou.insertAfter(button); setTimeout(function() { elmThankYou.remove(); }, 500); };
done!
button.prop('disabled',false);
Now you can send me a message!
Message server:
showFile('server.py'); wait(10000);
nginx config:
showFile('nginx.conf'); wait(10000);
EOF
lines.push('lines.push(lines[currentLine].slice(0,-1));'); //repeat 12345
