var loadCSS = function(url) {
    return new Promise(function(resolve, reject) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.addEventListener('error', function () {
            reject('Error: loading css');
        });
        link.addEventListener('load', function () {
            resolve(link);
        });
        link.href = url;
        document.head.appendChild(link);
    });
};

function createCodeElm(content) {
    var pre = document.createElement('pre');
    pre.className = "language-js line-numbers";
    pre.dataset.start = 0;
    var code = document.createElement('code');
    code.className = "language-js";
    code.innerHTML = content;
    pre.appendChild(code);
    var jsBlockInner = document.createElement('div');
    jsBlockInner.className = 'jsblockinner';
    jsBlockInner.appendChild(pre);
    var jsBlock = document.createElement('div');
    jsBlock.className = 'jsblock';
    jsBlock.appendChild(jsBlockInner);
    Prism.highlightElement(code);
    return jsBlock;
}

var getFile = function(url) {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) resolve(this.response);
                else reject(this.response);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
};

var jsmachine = {
    lines : [],
    speed : 3000,
    wait : function (time) {
        return new Promise(function (resolve, reject) {
            window.setTimeout(resolve, time) })
    },
    stop : function () {
        return new Promise( function(resolve,reject) { window.setTimeout(reject,this.speed) } );
    },
    promiseOrWait : function(p,time) {
        return (p instanceof Promise ? p : this.wait(time));
    },
    executeCode : function (line) {
        try {
            return eval(line)
        } catch (e) {
            console.log(e);
        }
    },
    display : function (line) { return new Promise(function(resolve) { resolve(); })},
    processLine : function (lineNumber) {
        this.running = true;
        this.currentLine = lineNumber;
        var code = this.lines[lineNumber];
        this.display(code).then(function () {
            return this.promiseOrWait(this.executeCode(code), this.speed);
        }.bind(this)).then(function () {
            if (this.running) this.processLine(lineNumber + 1)
        }.bind(this))
    }

};
