let conversation=0; //Sets conversation (which keeps track of what is being said) to the starting point
function switchCon(){
  conversation++; //this section of code first increases conversation, then sets the pictures and text for each value
  console.log(conversation);  //I couldn't think of a better way, as each dialouge and the portraits displayed had to be customized
  switch (conversation) {
    case 1:
      $("#conText").html("Hello Gereld, I had a great swim!");
      $("#character").css("display", "inline-block");
      $("#friend").css("display", "none");
      break;
    case 2:
      $("#conText").html("Cool! Did you get any fish? Some other penguins I was talking to complained about the lack of fish.");
      $("#friend").css("display", "inline-block");
      $("#character").css("display", "none");
      break;
    case 3:
      $("#conText").html("I only caught a few. Not as many as I should of this time of year. What do you think is causing it?");
      $("#character").css("display", "inline-block");
      $("#friend").css("display", "none");
      break;
    case 4:
      $("#conText").html("I don't know. Some other penguins said maybe we scared them away.");
      $("#friend").css("display", "inline-block");
      $("#character").css("display", "none");
      break;
    case 5:
      $("#conText").html("Lord, what fools these mortals be!");
      $("#hydraR").css("display", "inline-block");
      $("#friend").css("display", "none");
      $("#pictureHydra").css("display", "inline-block");
      $("#picturePenguin").css("display", "none");
      break;
    case 6:
      $("#conText").html("Be Quiet! And stop speaking that old english!");
      $("#hydraM").css("display", "inline-block");
      $("#hydraR").css("display", "none");
      break;
    case 7:
      $("#conText").html("Fine. But Old English is a compleatly different english. I was speaking early modern English.");
      $("#hydraR").css("display", "inline-block");
      $("#hydraM").css("display", "none");
      break;
    case 8:
      $("#conText").html("I Don't Care! Just Be Quiet!");
      $("#hydraM").css("display", "inline-block");
      $("#hydraR").css("display", "none");
      break;
    case 9:
      $("#conText").html("Sorry about this!");
      $("#hydraL").css("display", "inline-block");
      $("#hydraM").css("display", "none");
      break;
    case 10:
      $("#conText").html("Anyway, these waters are mine now. If you want fish, then move!");
      $("#hydraM").css("display", "inline-block");
      $("#hydraL").css("display", "none");
      break;
    case 11:
      $("#conText").html("I'm really sorry about this! If you have complaints, we are in the submerged ruin. Actually, don't come. Boss might eat you. Bye!");
      $("#hydraL").css("display", "inline-block");
      $("#hydraM").css("display", "none");
      break;
    case 12:
      $("#conText").html("What should we do?");
      $("#friend").css("display", "inline-block");
      $("#hydraL").css("display", "none");
      $("#picturePenguin").css("display", "inline-block");
      $("#pictureHydra").css("display", "none");
      break;
    case 13:
      $("#conText").html("I don't know. If I had a chance to defeat it, I would go after the Hydra.");
      $("#character").css("display", "inline-block");
      $("#friend").css("display", "none");
      break;
    case 14:
      $("#conText").html("I have an idea! My family passed down a magical bow-tie that would give you ice powers! I'll go get it.");
      $("#friend").css("display", "inline-block");
      $("#character").css("display", "none");
      break;
    case 15:
      $("#conText").html("Cool!");
      $("#character").css("display", "inline-block");
      $("#friend").css("display", "none");
      break;
    case 16:
      $("#conText").html("Okay, here it is. I wish I could go with you, but the head said it was in the sunken ruins, and you know I can't hold my breath long.");
      $("#friend").css("display", "inline-block");
      $("#character").css("display", "none");
      break;
    case 17:
      $("#conText").html("I know. I still wish you could come with me.");
      $("#character").css("display", "inline-block");
      $("#friend").css("display", "none");
      break;
    case 18:
      $("#conText").html("I wish I could come as well. I'll be here, making sure everyone else doesn't leave without you.");
      $("#friend").css("display", "inline-block");
      $("#character").css("display", "none");
      break;
    case 19:
      $("#conText").html("Okay, thanks. Bye!");
      $("#character").css("display", "inline-block");
      $("#friend").css("display", "none");
      break;
    case 20:
      $("#conText").html("Bye! I know you can do it!");
      $("#friend").css("display", "inline-block");
      $("#character").css("display", "none");
      break;
    default:
      $(".cutscene").css("display", "none");
      $("#video").css("display", "inline-block");
      var video = document.getElementById("video"); //I couldn't get this to work using the Jquery syntax, it wouldn't even work with let- It makes a  variable video, so I can play the video
      video.play();
      setTimeout(function(){ window.location.href = "../2ndScreen/2ndScreenHTML.html"; }, 3990); //takes you to the next screen when the video finishes
  }
}
$("#subName").click(function(){
  let name=$("#nameInput").val()
  console.log(name);
  $("#conText").html(`Hello ${name}! Did you have a good swim?`); //Sets the text for the first part of the conversation, as before name didn't have a value
  $(".cutscene").css("display", "inline-block");  //these 2 lines switch which elements are visable
  $(".name").css("display", "none");
  $("#pictureHydra").css("display", "none"); //this line hides one of the background pictures
  $("#hydraL").css("display", "none"); //these 4 lines set the 4 character portraits that are not in use for the first line invisable
  $("#hydraM").css("display", "none");
  $("#hydraR").css("display", "none");
  $("#character").css("display", "none");
  setInterval(switchCon, 3000); //starts the clock that switches the text and pictures
});
