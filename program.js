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
processLine = function (lineNumber) { var duration = lines[lineNumber].split("|")[0];var code = lines[lineNumber].slice(duration.length+1);$("#content").html(code); eval(code); if (lineNumber + 1 < lines.length) window.setTimeout(function () {processLine(lineNumber + 1)}, parseInt(duration));};
3000|//We're live! I'm still changing the timings a little bit to make it easier to read..
3000|//So.. let's make this input thing for you!
3000|input = $('<input placeholder="Type here!"/>');
3000|$('body').prepend(input);
3000|button = $('<button type="button">Send</button>');
3000|button.insertAfter(input);
3000|//There you go
3000|//Obviously the button doesn't do anything yet
3000|//So let's disable it for now
3000|button.prop('disabled',true);
3000|//now
3000|button.click(function() { sendMessage ( input.val() ) });
3000|//and implement sendMessage
3000|sendMessage = function(message) { $.post('/server', message , function() { messageDone() }, 'text'); };
3000|thankYou = '<span>Thank you!</span>';
3000|messageDone = function() { var elmThankYou = $(thankYou); elmThankYou.insertAfter(button); setTimeout(function() { elmThankYou.remove, 500 }); };
