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

var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number first");
    } else {
      // else just add the operator pressed to the input
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// on click of 'equal' button
result.addEventListener("click", function() {

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});

// clearing the input on press of clear
clear.addEventListener("click", function() {
  input.innerHTML = "";
})