function typeWriter(text, callback) {
    function next(currentText, i) {
        window.setTimeout(function () {
            callback(currentText);
            if (i < text.length) next(currentText + text[i], i + 1);
        }, Math.random() * 150)
    }

    next('', 0)
}
typeWriter('Ik moet wel even een langer testje maken om dit goed te doen', console.log);

typeWriter1 = new Promise(function (resolve, reject) {
    var
        });
display = function (code) {
    typeWriter(code, $("#content").text)
};

processLine = function (lineNumber) {
    currentLine = lineNumber;
    var code = lines[lineNumber];
    display(code);
    eval(code);
    if (lineNumber + 1 < lines.length) window.setTimeout(function () {
        processLine(lineNumber + 1)
    }, parseInt(duration));
};

loadScript = function (url) {
    var script = document.createElement('script');
    script.src = 'url';
    document.body.appendChild(script);
};
if (typeof Promise === 'undefined') loadScript('https://github.com/taylorhakes/promise-polyfill/blob/master/promise.min.js');
typeWriter = function (text, callback) {
    return new Promise(function (resolve, reject) {
        function next(currentText, i) {
            window.setTimeout(function () {
                callback(currentText);
                if (i < text.length) next(currentText + text[i], i + 1); else resolve();
            }, Math.random() * 150)
        }

        next('', 0)
    });
};
display = function (code) {
    return typeWriter(code, function (text) {
        $("#content").text(text);
    })
};
executeCode = function (line) {
    try {
        return eval(line)
    } catch (e) {
        console.log(e);
    }
};
wait = function (time) {
    return new Promise(function (resolve, reject) {
        window.setTimeout(resolve, time)
    })
};
running = true;
processLine = function (lineNumber) {
    running = true;
    currentLine = lineNumber;
    var code = lines[lineNumber];
    display(code).then(function () {
        executeCode(code);
        if (running && (lineNumber + 1 < lines.length)) window.setTimeout(function () {
            processLine(lineNumber + 1)
        }, 500);
    })
};
stopExecution = function () {
    running = false;
};
startExecution = function (line) {
    processLine(typeof line === 'undefined' ? (currentLine + 1) : line)
};


// display = function(code) { return typeWriter(code, console.log) };


var typeWriter = new

    stopExecution();
continueExecution;

wait = function (time, f) {
    stopExecution();
    f.call(undefined, Array.prototype.slice.call(arguments, 2));
    setTimeout(startExecution, time)
};
wait = function (time) { return new Promise(function (resolve, reject) { window.setTimeout(resolve, time) }) };

executeCode = function (line) { try { return eval(line) } catch (e) { console.log(e); }};
promiseOrWait = function(p,time) { return (p instanceof Promise ? p : wait(time)); };

processLine = function (lineNumber) {running = true;currentLine = lineNumber;var code = lines[lineNumber];display(code).then(function () {return promiseOrWait(executeCode(code), 1000);}.then(function() {if (running) processLine(lineNumber + 1)}))};
2000|//processLine = function (lineNumber) { running = true; currentLine = lineNumber; var code = lines[lineNumber]; display(code).then( function() { executeCode(code); if (running && (lineNumber + 1 < lines.length)) window.setTimeout(function () { if (running) processLine(lineNumber + 1) }, 1000); })};

processLine = function (lineNumber) {
    running = true;
    currentLine = lineNumber;
    var code = lines[lineNumber];
    display(code).then(function () {
        return promiseOrWait(executeCode(code), 1000);
    }).then(function () {
        if (running) processLine(lineNumber + 1)
    })
};
