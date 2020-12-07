function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom:12,
        center: { lat:18.4209, lng:-64.6167 },
});

const pos1 = {lat: 18.41945, lng: -64.61857};
const marker1 = new google.maps.Marker({position: pos1, map: map});
const pos2 = {lat: 18.42215, lng: -64.61852};
const marker2 = new google.maps.Marker({position: pos2, map: map});
const pos3 = {lat: 18.42082, lng: -64.61808};
const marker3 = new google.maps.Marker({position: pos3, map: map});
const pos4 = {lat: 18.41902, lng: -64.61858};
const marker4 = new google.maps.Marker({position: pos4, map: map});

const map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom:12,
        center: { lat:18.5166, lng:-77.8828 },
});

const pos5 = {lat: 18.51449, lng: -77.88126};
const marker5 = new google.maps.Marker({position: pos5, map: map1});
const pos6 = {lat: 18.51477, lng: -77.88083};
const marker6 = new google.maps.Marker({position: pos6, map: map1});
const pos7 = {lat: 18.51436, lng: -77.88057};
const marker7 = new google.maps.Marker({position: pos7, map: map1});
const pos8 = {lat: 18.50767, lng: -77.89627};
const marker8 = new google.maps.Marker({position: pos8, map: map1});

const map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom:12,
        center: { lat:13.0639, lng:-59.5645 },
});

const pos9 = {lat: 13.06690, lng: -59.57124};
const marker9 = new google.maps.Marker({position: pos9, map: map2});
const pos10 = {lat: 13.0667, lng: -59.56879};
const marker10 = new google.maps.Marker({position: pos10, map: map2});
const pos11 = {lat: 13.06742, lng: -59.56953};
const marker11 = new google.maps.Marker({position: pos11, map: map2});
const pos12 = {lat: 13.06746, lng: -59.56937};
const marker12 = new google.maps.Marker({position: pos12, map: map2});

const map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom:12,
        center: { lat:19.3394, lng:-81.3810 },
});

const pos13 = {lat: 19.33123, lng: -81.38091};
const marker13 = new google.maps.Marker({position: pos13, map: map3});
const pos14 = {lat: 19.33131, lng: -81.38153};
const marker14 = new google.maps.Marker({position: pos14, map: map3});
const pos15 = {lat: 19.33183, lng: -81.38095};
const marker15 = new google.maps.Marker({position: pos15, map: map3});
const pos16 = {lat: 19.33182, lng: -81.38067};
const marker16 = new google.maps.Marker({position: pos16, map: map3});

const map4 = new google.maps.Map(document.getElementById("map4"), {
        zoom:12,
        center: { lat:14.6023, lng:-61.0731 },
});

const pos17 = {lat: 14.60232, lng: -61.07284};
const marker17 = new google.maps.Marker({position: pos17, map: map4});
const pos18 = {lat: 14.60218, lng: -61.07293};
const marker18 = new google.maps.Marker({position: pos18, map: map4});
const pos19 = {lat: 14.60221, lng: -61.07274};
const marker19 = new google.maps.Marker({position: pos19, map: map4});
const pos20 = {lat: 14.60360, lng: -61.07242};
const marker20 = new google.maps.Marker({position: pos20, map: map4});

const map5 = new google.maps.Map(document.getElementById("map5"), {
        zoom:12,
        center: { lat:12.5159, lng:-70.0365 },
});

const pos21 = {lat: 12.51682, lng: -70.03688};
const marker21 = new google.maps.Marker({position: pos21, map: map5});
const pos22 = {lat: 12.51650, lng: -70.03723};
const marker22 = new google.maps.Marker({position: pos22, map: map5});
const pos23 = {lat: 12.51682, lng: -70.03713};
const marker23 = new google.maps.Marker({position: pos23, map: map5});
const pos24 = {lat: 12.51685, lng: -70.03708};
const marker24 = new google.maps.Marker({position: pos24, map: map5});

const map6 = new google.maps.Map(document.getElementById("map6"), {
        zoom:12,
        center: { lat:11.1576, lng:-60.8388 },
});

const pos25 = {lat: 11.15782, lng: -60.83649};
const marker25 = new google.maps.Marker({position: pos25, map: map6});
const pos26 = {lat: 11.15784, lng: -60.83629};
const marker26 = new google.maps.Marker({position: pos26, map: map6});
const pos27 = {lat: 11.15729, lng: -60.83706};
const marker27 = new google.maps.Marker({position: pos27, map: map6});
const pos28 = {lat: 11.15823, lng: -60.83729};
const marker28 = new google.maps.Marker({position: pos28, map: map6});
 
};

function buttonPressedVisual(b) {
  $(b).css("-webkit-box-shadow", "0");
  $(b).css("-moz-box-shadow", "0");
  $(b).css("box-shadow", "initial");
  $(b).css("border", "1px solid #222");
  setTimeout(function() {
    $(b).css("-webkit-box-shadow", "0 3px 1px rgba(0,0,0,0.2),0 -2px 3px rgba(0,0,0,0.3) inset, 0 -2px 0 white inset");
    $(b).css("-moz-box-shadow", "0 3px 1px rgba(0,0,0,0.2),0 -2px 3px rgba(0,0,0,0.3) inset, 0 -2px 0 white inset");
    $(b).css("box-shadow", "0 3px 1px rgba(0,0,0,0.2),0 -2px 3px rgba(0,0,0,0.3) inset, 0 -2px 0 white inset");
    $(b).css("border", "0");
  }, 200);
}
//-----------------------------------------------
// check if pressed key corresponds to a
// calculator button
// n -- negate; c -- clear (C); s -- sqrt; r -- 1/x
function valid(key) {
  var validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "=", "%", "+", "-", "*", "/", "Backspace", "Delete", "Enter", "n", "N", "c", "C", "s", "S", "r", "R"];
  if (validKeys.indexOf(key) > -1) return true;
  return false;
}
//-------------------------------
function addDigit(key, strInput) {
  //allow 10 digits before dec point and
  // 5 after the dec point
  // if changing make sure to change
  // the next fuction (adding decimal point) too
  var b = 10; //before decimal point
  var a = 5; //after decimal point
  var str = "";
  var decPointIndex = null;
  if (strInput[0] === "-") b++;
  if (strInput.match(/\./) === null) {
    if (strInput === "0") {
      if (key !== "0") strInput = "";
      else return strInput;
    }
    if (strInput.length < b) strInput += key;
  } else {
    decPointIndex = strInput.indexOf(".");
    str = strInput.substring(decPointIndex + 1);
    if (str.length < a) strInput += key;
  }
  $("#inputScr").html(strInput);
  return strInput;
}
//-------------------------
function addDecimalPoint(strInput) {
  //only take action if input string doesn't
  //have a decimal point
  if (strInput.match(/\./) === null) {
    var n = 11;
    if (strInput[0] === "-") n++;
    if (strInput.length < n) {
      if (strInput === "") strInput = "0";
      strInput += ".";
      $("#inputScr").html(strInput);
    }
  } //end of -- if there is no decimal point
  return strInput;
}
//------------------------
// backspace
function backspc(strInput) {
  if (strInput !== "") {
    var backspaceResultsInZero = (strInput.length === 2 && strInput[0] === "-") || strInput.length === 1;
    if (backspaceResultsInZero) strInput = "0";
    else strInput = strInput.substr(0, strInput.length - 1);
    $("#inputScr").html(strInput);
  }
  return strInput;
}
//-----------------------------
// shorten the output string so the latest
// data added would be displayed
// extra data from the beginning of the string
// is lost
function fixOut(x) {
  if (x.length > 30) {
    x = x.substring(x.length - 30);
    x = "&laquo;" + x;
  }
  return x;
}
//-------------------------------
//-------------------------
$(document).ready(function() {
  //focus the window so the keystrokes can be registered without
  //having to click on the screen first
  window.focus();

  var strInput = ""; //entered number
  var strOutput = ""; //holds output data for sqrt and 1/x
  var printed = ""; //data printed in the output screen
  var result = 0; //final result calculated up to last + or -
  var tempResult = null; //result after last + or -
  var current = 0; //holds active value, ie. strInput, result or tempResult
  var operation = ""; //active operation, can be any operation
  var prevOp = ""; //can be empty, + or -, holds last used lower order operation
  var prevOpTwo = ""; //empty, * or /, holds last used higher order operation
  var percentage = 0; //number of percents to be calculated with %
  var memory = null; //memory, null if not active
  //--------------
  //clear endtry (CE)
  //---------------------
  function clearEntry() {
    strInput = "";
    current = 0;
    $("#inputScr").html("0");
    return;
  };
  //-----------------
  // deal with floating point error
  // and round the number to max of 5 digits after the decimal point
  // this is only for display purpose, calculations are done without rounding
  function fix(x) {
    x = Number(x);
    x = x.toFixed(5);
    x = Number(x);
    return x;
  }
  //-------------------------
  function negate() {
    if (strInput !== "0") {
      if (strInput !== "") {
        if (strInput[0] === "-") strInput = strInput.substring(1);
        else strInput = "-" + strInput;
        $("#inputScr").html(strInput);
      } else {
        current *= -1;
        $("#inputScr").html(fix(current));
      }
    };
  };
  //---------------
  // clear (C) - everything but memory
  function clear() {
    strInput = "";
    strOutput = "";
    current = 0;
    printed = "";
    result = 0;
    tempResult = null;
    operation = "";
    prevOp = "";
    prevOpTwo = "";
    percentage = 0;
    $("#outputScr").html("");
    $("#inputScr").html("0");
  }
  //-------------------
  // calculates expression containing *, /, sqrt, 1/x and %
  // example: in r+a/b*c*sqrt(d)+ it calculates
  // the a/b*c*sqrt(d) and adds it to previously calculated r
  // in that case result for a/b*c is stored in tempResult
  // and value of sqrt(d) is stored in current
  function checkPrevOpTwo() {
    switch (prevOpTwo) {
      case "":
        switch (prevOp) {
          case "":
            result = current;
            break;
          case "+":
            result += current;
            break;
          case "-":
            result -= current;
            break;
        }
        break;
      case "*":
        switch (prevOp) {
          case "":
            result = tempResult * current;
            break;
          case "+":
            result += tempResult * current;
            break;
          case "-":
            result -= tempResult * current;
            break;
        }
        break;
      case "/":
        switch (prevOp) {
          case "":
            result = tempResult / current;
            break;
          case "+":
            result += tempResult / current;
            break;
          case "-":
            result -= tempResult / current;
            break;
        }
        break;
    }
  }
  //--------------
  // calculates value of sqrt or 1/x into tempResult 
  function checkPrevOpTwoTemp() {
    switch (prevOpTwo) {
      case "":
        tempResult = current;
        break;
      case "*":
        tempResult *= current;
        break;
      case "/":
        tempResult /= current;
        break;
    }
  }
  //---------------
  // + 
  // if there was no previous operations or input set initial result 
  // depending on previous operations calculate tempResult and the overall result
  function add() {
    if (strInput === "" && operation === "" && current === 0) printed = "0+";
    else {
      if (strInput === "" && operation === "" && current !== 0) {
        printed = fix(current) + "+";
        result = current;
      } else {
        if (strInput !== "" && operation === "") {
          printed = strInput + "+";
          result = Number(strInput);
        } else {
          if (strInput !== "") current = Number(strInput);
          switch (operation) {
            case "+":
              printed += fix(current) + "+";
              result += current;
              break;
            case "-":
              printed += fix(current) + "+";
              result -= current;
              break;
            case "*":
              printed += fix(current) + "+";
              switch (prevOp) {
                case "":
                  result = tempResult * current;
                  break;
                case "+":
                  result += tempResult * current;
                  break;
                case "-":
                  result -= tempResult * current;
                  break;
              }
              break;
            case "/":
              if (current === 0) {
                clear();
                $("#inputScr").html("Cannot divide by zero");
                return;
              }
              printed += fix(current) + "+";
              switch (prevOp) {
                case "":
                  result = tempResult / current;
                  break;
                case "+":
                  result += tempResult / current;
                  break;
                case "-":
                  result -= tempResult / current;
                  break;
              }
              break;
            case "sqrt":
            case "1/":
              printed += strOutput + "+";
              checkPrevOpTwo();
              break;
            case "%":
              printed += fix(percentage) + "%" + fix(current) + "+";
              current = percentage * current / 100;
              checkPrevOpTwo();
              percentage = 0;
              break;
          } // end of switch operation
        }
      }
    }
    current = result;
    $("#outputScr").html(fixOut(printed));
    $("#inputScr").html(fix(current));
    operation = "+";
    prevOp = "+";
    prevOpTwo = "";
    tempResult = null;
    strInput = "";
    strOutput = "";
  }
  //----------------
  // -
  // if there was no previous operations or input set initial result 
  // depending on previous operations calculate tempResult and the overall result
  function subtract() {
    if (strInput === "" && operation === "" && current === 0) printed = "0-";
    else {
      if (strInput === "" && operation === "" && current !== 0) {
        printed = fix(current) + "-";
        result = current;
      } else {
        if (strInput !== "" && operation === "") {
          printed = strInput + "-";
          result = Number(strInput);
        } else {
          if (strInput !== "") current = Number(strInput);
          switch (operation) {
            case "+":
              printed += fix(current) + "-";
              result += current;
              break;
            case "-":
              printed += fix(current) + "-";
              result -= current;
              break;
            case "*":
              printed += fix(current) + "-";
              switch (prevOp) {
                case "":
                  result = tempResult * current;
                  break;
                case "+":
                  result += tempResult * current;
                  break;
                case "-":
                  result -= tempResult * current;
                  break;
              }
              break;
            case "/":
              if (current === 0) {
                clear();
                $("#inputScr").html("Cannot divide by zero");
                return;
              }
              printed += fix(current) + "-";
              switch (prevOp) {
                case "":
                  result = tempResult / current;
                  break;
                case "+":
                  result += tempResult / current;
                  break;
                case "-":
                  result -= tempResult / current;
                  break;
              }
              break;
            case "sqrt":
            case "1/":
              printed += strOutput + "-";
              checkPrevOpTwo();
              break;
            case "%":
              printed += fix(percentage) + "%" + fix(current) + "-";
              current = percentage * current / 100;
              checkPrevOpTwo();
              percentage = 0;
              break;
          } // end of switch operation
        }
      }
    }
    current = result;
    $("#outputScr").html(fixOut(printed));
    $("#inputScr").html(fix(current));
    operation = "-";
    prevOp = "-";
    prevOpTwo = "";
    tempResult = null;
    strInput = "";
    strOutput = "";
  }
  //----------------
  // Enter,  =  
  // calculate the final result
  function calculate() {
    if (strInput === "" && operation === "" && current !== "") return;
    if (strInput !== "" && operation === "") {
      printed = strInput + "=";
      result = Number(strInput);
    } else {
      if (strInput !== "") current = Number(strInput);
      switch (operation) {
        case "+":
          printed += fix(current) + "=";
          result += current;
          break;
        case "-":
          printed += fix(current) + "=";
          result -= current;
          break;
        case "*":
          printed += fix(current) + "="
          switch (prevOp) {
            case "":
              result = tempResult * current;
              break;
            case "+":
              result += tempResult * current;
              break;
            case "-":
              result -= tempResult * current;
              break;
          }
          break;
        case "/":
          if (current === 0) {
            clear();
            $("#inputScr").html("Cannot divide by zero");
            return;
          }
          printed += fix(current) + "="
          switch (prevOp) {
            case "":
              result = tempResult / current;
              break;
            case "+":
              result += tempResult / current;
              break;
            case "-":
              result -= tempResult / current;
              break;
          }
          break;
        case "sqrt":
        case "1/":
          printed += strOutput + "=";
          checkPrevOpTwo();
          break;
        case "%":
          printed += fix(percentage) + "%" + fix(current) + "=";
          current = percentage * current / 100;
          checkPrevOpTwo();
          percentage = 0;
          break;
      } // end of switch operation
    }
    current = result;
    $("#outputScr").html(fixOut(printed));
    $("#inputScr").html(fix(current));
    operation = "";
    result = 0;
    prevOp = "";
    prevOpTwo = "";
    tempResult = null;
    strInput = "";
    printed = "";
  }
  //---------------
  // multiplication *
  function multiply() {
    if (strInput === "" && operation === "" && current === 0) printed = "0*";
    else {
      if (strInput === "" && operation === "" && current !== 0) {
        printed = fix(current) + "*";
        tempResult = current;
      } else {
        if (strInput !== "" && operation === "") {
          printed = strInput + "*";
          tempResult = Number(strInput);
        } else {
          if (strInput !== "") current = Number(strInput);
          switch (operation) {
            case "+":
            case "-":
              printed += fix(current) + "*";
              tempResult = current;
              break;
            case "*":
              printed += fix(current) + "*";
              tempResult *= current;
              break;
            case "/":
              if (current === 0) {
                clear();
                $("#inputScr").html("Cannot divide by zero");
                return;
              }
              printed += fix(current) + "*";
              tempResult /= current;
              break;
            case "sqrt":
            case "1/":
              printed += strOutput + "*";
              checkPrevOpTwoTemp();
              break;
            case "%":
              printed += fix(percentage) + "%" + fix(current) + "*";
              current = percentage * current / 100;
              checkPrevOpTwoTemp();
              percentage = 0;
              break;
          } // end of switch operation
        }
      }
    }
    current = tempResult;
    $("#outputScr").html(fixOut(printed));
    $("#inputScr").html(fix(current));
    operation = "*";
    prevOpTwo = "*";
    strInput = "";
    strOutput = "";
  }
  //----------------
  // division /
  // report error if user trys to 
  // divide by zero
  function divideBy() {

    if (strInput === "" && operation === "" && current === 0) printed = "0/";
    else {
      if (strInput === "" && operation === "" && current !== 0) {
        printed = fix(current) + "/";
        tempResult = current;
      } else {
        if (strInput !== "" && operation === "") {
          printed = strInput + "/";
          tempResult = Number(strInput);
        } else {
          if (strInput !== "") current = Number(strInput);
          switch (operation) {
            case "+":
            case "-":
              printed += fix(current) + "/";
              tempResult = current;
              break;
            case "*":
              printed += fix(current) + "/";
              tempResult *= current;
              break;
            case "/":
              if (current === 0) {
                clear();
                $("#inputScr").html("Cannot divide by zero");
                return;
              }
              printed += fix(current) + "/";
              tempResult /= current;
              break;
            case "sqrt":
            case "1/":
              printed += strOutput + "/";
              checkPrevOpTwoTemp();
              break;
            case "%":
              printed += fix(percentage) + "%" + fix(current) + "/";
              current = percentage * current / 100;
              checkPrevOpTwoTemp();
              percentage = 0;
              break;
          } // end of switch operation
        }
      }
    }
    current = tempResult;
    $("#outputScr").html(fixOut(printed));
    $("#inputScr").html(fix(current));
    operation = "/";
    prevOpTwo = "/";
    strInput = "";
    strOutput = "";
  }
  //---------------------
  // square root
  // report error if user is trying to calculate
  // a square root of a negative number
  function squareRoot() {
    if (strInput !== "") current = Number(strInput);
    if (current < 0) {
      clear();
      $("#inputScr").html("Invalid input");
      return;
    }
    if (operation === "%") {
      strOutput = "sqrt(" + fix(percentage) + "%" + fix(current) + ")";
      current = percentage * current / 100;
      current = Math.sqrt(current);
      percentage = 0;
    } else {
      strOutput = "sqrt(" + fix(current) + ")";
      current = Math.sqrt(current);
    }
    $("#outputScr").html(fixOut(printed + strOutput));
    $("#inputScr").html(fix(current));
    operation = "sqrt";
    strInput = "";
  }
  //----------------
  // calculate reciprocal of a number
  // report error if user trys to calculate
  // reciprocal value of zero
  function oneDividedBy() {
    if (strInput !== "") current = Number(strInput);
    if (current === 0) {
      clear();
      $("#inputScr").html("Cannot divide by zero");
      return;
    }
    if (operation === "%") {
      strOutput = "rec(" + fix(percentage) + "%" + fix(current) + ")";
      current = percentage * current / 100;
      current = 1 / current;
      percentage = 0;
    } else {
      strOutput = "rec(" + fix(current) + ")";
      current = 1 / current;
    }
    $("#outputScr").html(fixOut(printed + strOutput));
    $("#inputScr").html(fix(current));
    operation = "1/";
    strInput = "";
  }
  //----------------
  // to calculate x percent of y 
  // enter x then % then y
  // this function only remembers the percentage (x in example above)
  // the rest is calculated after the next operation is 
  // entered (see previous funtions)
  function percentOf() {
    if (strInput !== "") {
      current = Number(strInput);
      strInput = "";
    }
    if (operation === "%") current = percentage * current / 100;
    percentage = current;
    $("#outputScr").html(fixOut(printed + fix(percentage) + "%"));
    $("#inputScr").html(fix(current));
    operation = "%";
  }
  //----------------
  // register a keystroke
  //----------------
  document.addEventListener("keydown", function(e) {
    event.preventDefault();
    if (valid(e.key)) {
      if (e.key >= "0" && e.key <= "9") strInput = addDigit(e.key, strInput);
      if (e.key === ".") strInput = addDecimalPoint(strInput);
      if (e.key === "Backspace") strInput = backspc(strInput);
      if (e.key === "Delete") clearEntry();
      if (e.key.toLowerCase() === "n") negate();
      if (e.key.toLowerCase() === "c") clear();
      if (e.key === "+") add();
      if (e.key === "-") subtract();
      if (e.key === "Enter") calculate();
      if (e.key === "*") multiply();
      if (e.key === "/") divideBy();
      if (e.key.toLowerCase() === "s") squareRoot();
      if (e.key.toLowerCase() === "r") oneDividedBy();
      if (e.key === "%") percentOf();
    } //end of if valid key
  })
  $("#buttons div").on("click", function() {
    buttonPressedVisual(this);
  })
  $("#one").on("click", function() {
    strInput = addDigit("1", strInput);
  })
  $("#two").on("click", function() {
    strInput = addDigit("2", strInput);
  })
  $("#three").on("click", function() {
    strInput = addDigit("3", strInput);
  })
  $("#four").on("click", function() {
    strInput = addDigit("4", strInput);
  })
  $("#five").on("click", function() {
    strInput = addDigit("5", strInput);
  })
  $("#six").on("click", function() {
    strInput = addDigit("6", strInput);
  })
  $("#seven").on("click", function() {
    strInput = addDigit("7", strInput);
  });
  $("#eight").on("click", function() {
    strInput = addDigit("8", strInput);
  })
  $("#nine").on("click", function() {
    strInput = addDigit("9", strInput);
  })
  $("#zero").on("click", function() {
    strInput = addDigit("0", strInput);
  })
  $("#decpoint").on("click", function() {
    strInput = addDecimalPoint(strInput);
  })
  $("#plusminus").on("click", function() {
    negate();
  })
  $("#backspace").on("click", function() {
    strInput = backspc(strInput);
  })
  $("#ce").on("click", function() {
    clearEntry();
  })
  $("#c").on("click", function() {
      clear();
    }) //end of clear (c) click
    //------------------
    // save number into memory
  $("#ms").on("click", function() {
      if (strInput === "") {
        if (current !== 0) {
          memory = current;
          $("#displayM").html("M");
        }
      } else
      if (Number(strInput) != 0) {
        memory = Number(strInput);
        current = memory;
        strInput = "";
        $("#displayM").html("M");
      };
    }) // end of click on ms
    //--------------------------------
    // delete number from memory
  $("#mc").on("click", function() {
      $("#displayM").html("");
      memory = null;
    })
    // ----------------------
    // recall memory and set it
    // to be the active value
  $("#mr").on("click", function() {
      if (memory !== null) {
        current = memory;
        strInput = "";
        $("#inputScr").html(fix(current));
      }
    })
    //--------------
    // add currently active value
    // to the existing memory
    // if there is no existing memory 
    // procede as if memory is 0
  $("#mp").on("click", function() {
      if (strInput === "") {
        if (current !== 0) {
          if (memory === null) memory = 0;
          memory += current;
          $("#displayM").html("M");
          $("#displayM").append("+");
          setTimeout(function() {
            $("#displayM").html("M");
          }, 1000);
        }
      } else
      if (Number(strInput) !== 0) {
        if (memory === null) memory = 0;
        memory += Number(strInput);
        $("#displayM").html("M");
        $("#displayM").append("+");
        setTimeout(function() {
          $("#displayM").html("M");
        }, 1000);
      };
    }) //end if mp click
    //--------------
    // subtract currently active value
    // from the existing memory
    // if there is no existing memory 
    // procede as if memory is 0
  $("#mm").on("click", function() {
      if (strInput === "") {
        if (current !== 0) {
          if (memory === null) memory = 0;
          memory -= current;
          $("#displayM").html("M");
          $("#displayM").append("-");
          setTimeout(function() {
            $("#displayM").html("M");
          }, 1000);
        }
      } else
      if (Number(strInput) !== 0) {
        if (memory === null) memory = 0;
        memory -= Number(strInput);
        $("#displayM").html("M");
        $("#displayM").append("-");
        setTimeout(function() {
          $("#displayM").html("M");
        }, 1000);
      };
    }) //end if mm click
    //-----------------------------------------------------
  $("#plus").on("click", function() {
      add();
    })
    //---------------------------------  
  $("#minus").on("click", function() {
      subtract();
    })
    //---------------------------------------------------  
  $("#equals").on("click", function() {
      calculate();
    })
    //--------------------------------------------
  $("#times").on("click", function() {
      multiply();
    })
    //-----------------------------------------------
  $("#divide").on("click", function() {
      divideBy();
    })
    //-----------------------------------------
  $("#sqroot").on("click", function() {
      squareRoot();
    })
    //----------------------------------------
  $("#reciprocal").on("click", function() {
      oneDividedBy();
    })
    //----------------------------------------
  $("#percent").on("click", function() {
    percentOf();
  })

}); //end of document.ready