// object oriented programming
// Will have 4 functions
// create crypto class, takes a string as an argument
var Crypto = function(text){
	// store string for use elsewhere
	this.normalizePlaintext = function() {
	// classes(abstract)- have properties and methods of objects(tangible)
		return text.toLowerCase().replace(/\W/g,""); 
		// regular expression
		// "\w" selects characters that are word characters
		// "\W" selects characters that are non word
		// "g" performs global replacement
		// "" empty string
	}

	
	this.size = function() {
		var length = this.normalizePlaintext().length;
        	return Math.ceil(Math.sqrt(text.length));
      };
        // size = sqrt of string.length
        // all math function must have "Math."

      this.plaintextSegments = function() { // array of strings
      	var npt = this.normalizePlaintext();
      	var size = this.size();
      	var segments = [];
      		for (i=0; i<npt.length; i+= size) {
        segments.push(npt.substr(i,size));
      }
      		return segments;
    };
  this.ciphertext = function(){
      var normalized = this.normalizePlaintext();
      var cipher = Math.ceil(this.size()) - 1; //um, or just 6
      var ciphered = "";
      for (var x=0; x<cipher; x++){
        for (var i=x; i<normalized.length; i+=cipher){
        ciphered += normalized[i];
        }
      };
      return ciphered;
    }
  };

module.exports = Crypto;
