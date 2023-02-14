(function (window) {  
    var helloSpeaker = {};
    var abc = "Hello";
    
    helloSpeaker.speak = function (names) {
      console.log(abc + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);