/* 
    Returns false if string contains not allowed character
*/
var checkAllowedCharacters = function(string, allowedCharacters) {
    var hit = false;
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < allowedCharacters.length; j++) {

            if (string[i] === allowedCharacters[j]) {
                hit = true;
                console.log("Character " + string[i] + " matches " + allowedCharacters[i] + " at index " + i);
            }
        }
        if (hit === false) {
            console.log("Character " + string[i] + " does not match " + allowedCharacters[i] + " at index " + i);
            return false;
        }
    }
    //returnerar true om den klarat sig igenom alla tecken
    return true;
};

/* Tar sträng som input och returnerar en sträng utan whitespaces*/
var removeWhiteSpaces = function(string) {
    var newString = "";
    for (var z = 0; z < string.length; z++) {
        if(checkAllowedCharacters(string[z],"0123456789")){
            newString= newString.concat(string[z]);
        }
    }
    return newString;
};

//Validerar input att det är ett telefonnummer
var checkPhone = function(input) {
    //Tillåtna karaktärer
    var allowedCharacters = "0123456789 ";
    var validInput = checkAllowedCharacters(input, allowedCharacters);
    console.log("Passed valid string");
    //gömma varningar
    if (validInput) {
        //formaterad input(whitespaces borttagna)
        var newStrang =  removeWhiteSpaces(input);
        return newStrang;
    }
    //visa varningar
    else {
        return false;
    }
};