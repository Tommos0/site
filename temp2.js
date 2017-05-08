loadScript('functions.js');
loadScript('prism.js?2');
loadScript('prism-highlight.js?8');
loadCSS('prism.css?3');
loadCSS('reset.css');
loadCSS('main.css?13');
getFile('program.js').then(function(script) { document.body.innerHTML = ''; jsBlock = createCodeElm(script); document.body.appendChild(jsBlock); j1 = Object.create(jsmachine); j1.lines = script.split("\n"); j1.display = function (line) { return new Promise(function(resolve) { highlight(document.querySelector('pre'),j1.currentLine.toString()); resolve(); })} j1.processLine(80);});
processLine = function() {};
