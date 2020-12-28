//jshint esversion:6

exports.getDate = function (){

    let today = new Date(); //declares date fucntion in JS

    let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    };

    return today.toLocaleString("en-US",options);

};

exports.getDay = function (){

    let today = new Date(); //declares date fucntion in JS

    let options = {
    weekday: "long",
    };

    return today.toLocaleString("en-US",options);

};

