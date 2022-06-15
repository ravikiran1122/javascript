(function(){
    var names=["yaakov","john","jen","jason","paul","frank","jim","lara","lina"]
    for(var i=0;i<names.length;i++){
        var firstletter=names[i].charAt(0).toLowerCase();
        if (firstLetter=='j'){
            byeSpeaker.speak(names[i]);
        }else {
            helloSpeaker.speak(names[i]);
        }
    }
})();