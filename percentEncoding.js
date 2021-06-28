const urlEncode = function (text) {
  string = "";

  for (i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (!(i == 0 || i == text.length - 1)) { //( Logical NOT ) This omits the spaces at beginning and end of string, ie: the 2nd sample console.log() 
        string += "%20";

      }
    } else {
      string += text[i]; // adding the char from text parameter to the newly added space encoded as "%20" from the string var

    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


/*
const urlEncode = function (text) {
  var str = text;
  for (var i = 0; i < text.length; i++) {
    if (text == '') {
      str.push('$20');
    }else if {
      str.push (text);

    }

    return str;
  };


/*
const urlEncode = function (text) {
  var str = text;
  var whiteSpace = /\s/g;
  var result = str.match(whiteSpace);

  for (let i = 0; i < text.length; i++) {
    if (text i === "") {
      str === ("" + "$20");
    }
  return result;
}
  //  /\s/ = whitespace characters, g global search for all matches
  // match() method searches a string for a match against a regular expression
/*
  for (let i = 0; i < text.length; i++) {
    console.log(y);
    if (i === /\s/) {
      y === i + '%20';
    }
    */


//console.log(urlEncode("Lighthouse Labs"));
//console.log(urlEncode(" Lighthouse Labs "));
//console.log(urlEncode("blue is greener than purple for sure"));

/*
var uri = text;
  var encoded = encodeURI(uri);
  //console.log(encoded);
  return encoded;
};
*/