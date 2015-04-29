var titleCase = function(string) {
    //associative array containing all the words to ignore when uppercasing
    var ignore = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
      'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];

    //converts entire string to lowercase
    var str = string.toLowerCase();

    //Creates function called by the RegExp to uppercase words
    function toUpper(match){
        return match.toUpperCase();
    };

    //Creates function called in the forEach loop to lowercase words
    function toLower(match){
        return match.toLowerCase();
    };

    //Takes our string and uppercases the first letter of every word
    var newStr = str.replace(/\b\w/g, toUpper);

    //forEach loop through each word in the ignore array, uses RegExp to lowercase
      //the first letter of the ignored word
    ignore.forEach(function(word) {
            newStr = newStr.replace(new RegExp('\\s' + word + '\\b' , 'g'), toLower);
    });

    return newStr;
};

//This was the code replaced by the regular expressions above
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

$(document).ready(function() {
  $("input#title").focus();
    $("form#title").submit(function(event) {
      event.preventDefault();
      var title = $("input#title").val();
      var result = titleCase(title);

      $(".newtitle").text(result);

      $("#result").show();
      $("form#title").hide();
    });
});
