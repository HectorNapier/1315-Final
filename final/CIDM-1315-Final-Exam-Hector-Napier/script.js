//Index page Code:
/* Get all the checkboxes with the name "make_music?" and store them in the variable "checkbox" define the function "checkedbocButton" check if box is checked, if it is checked, display alert. */

function checkboxButton() {
  var checkbox = document.getElementsByName("make_music?.");
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      if (checkbox[i].value == "Yes") {
        alert("NICE!!!! I make music too");
        break;
      } else {
        alert("awww!! you should try it, its fun.");
        break;
      }
    }
  }
}


//Experience page Code:
      /* Getting the value of name attribute "Type_of_music" and returning a answer that relates to my likes. Using Prompt() to allow user to answer the question with an option of music not provided by me when they select "Other" */
function radioButton() {
  var radio = document.getElementsByName("Type_of_music");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      if (radio[i].value == "Rock") {
        document.getElementById("result").innerHTML = "I'm a fan of System of a Down.";
        break;
      } else if (radio[i].value == "Country") {
        document.getElementById("result").innerHTML = "I only like old country, not the new stuff on the radio.";
        break;
      } else if (radio[i].value == "Hip-Hop") {
        document.getElementById("result").innerHTML = "One of my favorites.";
        break;
      } else if (radio[i].value == "Latin") {
        document.getElementById("result").innerHTML = "My most favorite out of them all.";
        break;
      } else if (radio[i].value == "All the Above") {
        document.getElementById("result").innerHTML = "Where I stand with these.";
        break;
      /*If the user selects "Other", ask to input a type of music and return the user input using prompt() (code below)*/
      } else if (radio[i].value == "Other") { 
        var name = prompt("Please enter the name of the music type.:");
        if (name != null && name != "") { //if the user entered a music type, display a message with the user's input
          document.getElementById("result").innerHTML = "I'd have to check " + name + " music out."; 
        }
        break;
      } 
    }
  }
}

//Goals page Code:
/*function to validating if the user input is an integer only, return my response to their H/PW, if not, return not a number. */
 function average() {
    var numbers = /^[-+]?[0-9]+$/; //Number Validation
    var userNum = document.getElementById("userNumber").value;
    if (userNum.match(numbers)) {
      if (userNum > 12) {
        return "Your average is higher than mine (12 hrs per week).";
      } else if (userNum < 12) {
        return "My average is 12 hrs per week.";
      } else {
        return "Your average is 12 hrs per week.";
      }
    } else {
      return "Not a number.";
    }
  }

/*function to validating letters only, return my response to their input of letters. if not, then return "you did not enter a name"*/
  function application() {
    var letters = new RegExp("^[A-Za-z ]+$"); //Letter validation w/ space for 2 word answers
    var userName = document.getElementById("name").value;
    if (userName.match(letters)) {
      return "Nice, mine is Spotify!";
    } else {
      return "You did not enter a name.";
    }
  }

  function submitAnswers() {
    var message = average() + "\n" + application(); 
    alert(message);
  }