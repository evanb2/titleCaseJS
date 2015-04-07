var titleCase = function(string) {
    var ignore = ["a", "an", "the", "and", "but", "or", "nor", "at", "by", "for", "from",
                  "in", "into", "of", "off", "on", "onto", "out", "over", "up", "with", "to", "as"];
    var wordarrays = string.toLowerCase().split(" ");
    var newarray = [];
    var length = wordarrays.length -1;
    wordarrays.forEach(function(wordarray) {
        if ((ignore.indexOf(wordarray) !== -1) && (wordarray !== wordarrays[0]) && (wordarray !== wordarrays[length])) {
            newarray.push(wordarray);
        } else {
            wordarray = wordarray.charAt(0).toUpperCase() + wordarray.slice(1);
            newarray.push(wordarray);
        }
    });
    return newarray.join(" ");
};
