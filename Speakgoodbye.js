(function (window){
    var byeSpeaker={}
    var speakword="goodbye";
    byeSpeaker.speak=function(name){
        console.log(speakword+""+name);
}
window.byeSpeaker=byeSpeaker
})(window);