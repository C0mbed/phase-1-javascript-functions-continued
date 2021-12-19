// code your solution here

function saturdayFun(funThing) {
    if (funThing) {
        return "This Saturday, I want to " + funThing + "!";
    } else {
        return "This Saturday, I want to roller-skate!";
    } 
}

function mondayWork(workThing) {
    if (workThing) {
        return "This Monday, I will " + workThing + ".";
    } else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(thing) {
    return function (str) {
        return `You are ${thing}${str}${thing}!`;
    };
}
