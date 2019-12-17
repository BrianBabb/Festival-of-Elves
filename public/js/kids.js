var weeklyMessages = [
  { day: 01, message: "24 Days before Christmas!!!When Santa told us we would be your elves for festival of the elves we were soooo EXCITED!!! We left you dolls that look like us, so first thing is to give us a hug.Festival of the Elves is a magical time. Each day you will find a special note left behind. To get into the spirit we have three wishes to make:1.Please make us a Christmas drawing for our workshop.2.Spin around 3 times.3.Give someone you love a hug."},
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
  { day: 17, message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"},
  { day: 18, message: "Today is thursday" },
  { day: 19, message: "Today is thursday" },
  { day: 20, message: "Today is thursday" },
  { day: 21, message: "Today is thursday" },
  { day: 22, message: "Today is thursday" },
  { day: 23, message: "Today is thursday" },
  { day: 24, message: "Today is thursday" },
  { day: 25, message: "It is Christmas!!!!!!" }
];

$(".btn").on("click", function(e) {
  console.log("clicked a day", this);
  var day = parseInt($(this).data("day"));

  var today = new Date();
  var todaysdate = today.getDate(); // 14
  if (day > todaysdate) {
    console.log("shouldnt be clicking on this");
    $("#msg").text("you bad kids!");
  } else {
    var message = weeklyMessages[day].message;
    $("#msg").text(message);
  }
});
