(function (window){
    var byeSpeaker = {};
    var abc = "Good Bye";
    
    byeSpeaker.speak = function (names) {
      console.log(abc + " " + names);
    }
     
     window.byeSpeaker = byeSpeaker;
    })(window);