function trimString()  {
    console.log("      himanshu soni     ".trim());
}

function lowerString()   {
    console.log("HiMansHu SoNi".toLowerCase());
}


function upperString()   {
    console.log("himanshu soni".toUpperCase())
}



module.exports.trim = trimString;
module.exports.lower = lowerString;
module.exports.upper = upperString;