
/* code for the html
<h1>Festival of the Elves<h1>
<div class="calendar">
</div>
*/

//generate 24 calendar boxes
for(i=1; i<25; i++){
    $(".calendar").append("<div class="door">" +i+ "</div>")
}

//add click handler
$(".door").click(onDoorClick);

//when clicked on a door
function onDoorClick(){
    var day = $(this).text();

    switch(day){
        case "1":
            modal(case "1":
            modal("display day one message")
        case "2":
            modal(case "2":
            modal("display day two message")
    }
}