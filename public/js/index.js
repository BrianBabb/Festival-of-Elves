
var weeklyMessages = [
  { day: 01, message: "24 Days before Christmas!!!When Santa told us we would be your elves for festival of the elves we were soooo EXCITED!!! We left you dolls that look like us, so first thing is to give us a hug.Festival of the Elves is a magical time. Each day you will find a special note left behind. To get into the spirit we have three wishes to make:1.Please make us a Christmas drawing for our workshop.2.Spin around 3 times.3.Give someone you love a hug." },
  { day: 02, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { day: 03, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { day: 04, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { day: 05, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
  { day: 06, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
  { day: 07, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
  { day: 08, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
  { day: 09, message: "16 Days before Christmas!!!!!!It’s time to write your note to Santa Claus. Santa loves to read letters from all his children. When Santa reads each letter he’s seated in his big red chair with hot cocoa. Santa has a big smile on his face and his belly wiggles which every jiggle. P.S. Santa really likes when you draw on the note. Have fun!" },
  { day: 10, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
  { day: 11, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
  { day: 12, message: "Today is thursday" },
  { day: 13, message: "Today is thursday" },
  { day: 14, message: "Today is thursday" },
  { day: 15, message: "Today is thursday" },
  { day: 16, message: "9 Days before Christmas!!!!!!We can feel your Christmas cheer all the way up at the North Pole. It warmed our hearts - keep it up!Let’s have some fun. It’s time for a Christmas Hunt!!! We hid an ornament in your home, happy hunting.Love," },
  { day: 17, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
  { day: 18, message: "7 Days before Christmas!!!!!!We can feel your Christmas cheer all the way up at the North Pole. It warmed our hearts - keep it up!Let’s have some fun. It’s time for a Christmas Hunt!!! We hid an ornament in your home, happy hunting.Love," },
  { day: 19, message: "Today is thursday" },
  { day: 20, message: "Today is thursday" },
  { day: 21, message: "Today is thursday" },
  { day: 22, message: "Today is thursday" },
  { day: 23, message: "Today is thursday" },
  { day: 24, message: "Today is thursday" },
  { day: 25, message: "It is Christmas!!!!!! Hooray, Hooray!Enjoy this special day with your family. Please remember to keep Christmas in your heart by being good and kind all year round. We’ll visit you again next year. We will miss you very, very much." }
  
];
var app = {
  settings: {
    container: $(".calendar"),
    calendar: $(".front"),
    days: $(".weeks span"),
    form: $(".back"),
    input: $(".back input"),
    buttons: $(".back button")
  },

  init: function() {
    console.log(this);
    instance = this;
    settings = this.settings;
    this.bindUIActions();
  },

  swap: function(currentSide, desiredSide) {
    console.log(this);
    settings.container.toggleClass("flip");

    currentSide.fadeOut(900);
    currentSide.hide();

    desiredSide.show();
  },

  bindUIActions: function() {
    settings.days.on("click", function() {
      var myMsg = weeklyMessages[this.id].message;
      document.getElementById("msg").innerHTML = myMsg;
      instance.swap(settings.calendar, settings.form);
      settings.input.focus();
    });

    settings.buttons.on("click", function() {
      //console.log(this);
      instance.swap(settings.form, settings.calendar);
    });
  }
};

app.init();

// var cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars[0];

// Get references to page elements
// console.log("for elves data");
// $("input:checkbox").on("change", function(evt) {
//   if ($(this).siblings(":checked").length >= 2) {
//     this.checked = false;
//     console.log(this.value);
//     console.log(this.value);
//     console.log(this.value);
//   }
// });

// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
