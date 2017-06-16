var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function(password) {
  var uniqPassword = _.uniq(password);
  console.log(uniqPassword);
  var stringPassword = _.join(uniqPassword, "");
  if (stringPassword === password) {
    console.log("Contraseña aceptada, puede continuar");
  } else {
    console.log("La contraseña introducida no es correcta");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);


// No funciona esta función... pero lo he intentado!! :)
var goodPsswd = "1234567890";
var badPsswd = "a1a234567890";
var onlyNumbers = function(password) {

    var arrayMapped = _.map(password, function(checkNumber) {
        if (_.isNumber(checkNumber)) {
          console.log("Contraseña correcta, puede continuar");
        } else {
          console.log("La contrasena no contiene numeros. Cambiala");
        }
      });
    };

    onlyNumbers(goodPsswd);
    onlyNumbers(badPsswd);

// Y esta ya ni te digo! jaja enseñádmela TA's!
    // var goodPsswd = "1234567890";
    // var badPsswd = "12345678901234567890";
    // var trimPassword = function (password) {
    //  //your code goes here
    // }
    // trimPassword(badPsswd);
