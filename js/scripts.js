var titleCase = function(string) {
    var ignore = ["a", "an", "the", "and", "but", "or", "nor", "at", "by", "for", "from",
                  "in", "into", "of", "off", "on", "onto", "out", "over", "up", "with", "to", "as"];
    var str = string.toLowerCase();
    function toUpper(match){
        return match.toUpperCase();
    };
    var newStr = str.replace(/\b\w/g, toUpper);
    console.log(newStr);
    return newStr;
    // var wordarrays = string.toLowerCase().split(" ");
    // var newarray = [];
    // var length = wordarrays.length -1;
    // wordarrays.forEach(function(wordarray, index) {
    //     if ((ignore.indexOf(wordarray) !== -1) && (index !== 0) && (index !== length)) {
    //         newarray.push(wordarray);
    //     } else {
    //         wordarray = wordarray.charAt(0).toUpperCase() + wordarray.slice(1);
    //         newarray.push(wordarray);
    //     }
    // });
    // return newarray.join(" ");
};


$(document).ready(function() {
    $("form#title").submit(function(event) {


        var title = $("input#title").val();
        var result = titleCase(title);

        $(".newtitle").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
