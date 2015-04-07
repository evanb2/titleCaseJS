var titleCase = function(string) {
    var ignore = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
      'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    var str = string.toLowerCase();
    function toUpper(match){
        return match.toUpperCase();
    };

    function toLower(match){
        return match.toLowerCase();
    }
    var newStr = str.replace(/\b\w/g, toUpper);

    ignore.forEach(function(word) {
            newStr = newStr.replace(new RegExp('\\s' + word + '\\b' , 'g'), toLower);
    });


    return newStr;
};

//     // var wordarrays = string.toLowerCase().split(" ");
//     // var newarray = [];
//     // var length = wordarrays.length -1;
//     // wordarrays.forEach(function(wordarray, index) {
//     //     if ((ignore.indexOf(wordarray) !== -1) && (index !== 0) && (index !== length)) {
//     //         newarray.push(wordarray);
//     //     } else {
//     //         wordarray = wordarray.charAt(0).toUpperCase() + wordarray.slice(1);
//     //         newarray.push(wordarray);
//     //     }
//     // });
//     // return newarray.join(" ");



$(document).ready(function() {
    $("form#title").submit(function(event) {


        var title = $("input#title").val();
        var result = titleCase(title);

        $(".newtitle").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
