let hy = false; //keeps track is you have the hydra head
Crafty.init(410,410, document.getElementById('game'));
function HydraCutscene() {
  $(".cutscene").css("display","inline");
  $(".game").css("display","none");
  $("#character").css("display","none");
  $("#hydraL").css("display","none");
  $("#pictureHydraIce").css("display","none");
  $("#pictureHydraFrozen").css("display","none");
  $("#picturePenguinSwim").css("display","none");
  $("#conText").html("I thought either one of them would stop you. Oh well, I'll just have to do it myself.");
  $("#sound").css("top","800px");
  $("#sound").css("left","300px");
  let conversation = 0;
  setInterval(function(){
    conversation++
    switch (conversation) {
      case 1:
        $("#conText").html("Leave and I won't harm you!");
        $("#character").css("display", "inline-block");
        $("#hydraM").css("display", "none");
        break;
      case 2:
        $("#conText").html("Ha Ha Ha, very funny. What makes you think I'm scared of you?");
        $("#hydraM").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 3:
        $("#conText").html("I did get past your other heads.");
        $("#character").css("display", "inline-block");
        $("#hydraM").css("display", "none");
        break;
      case 4:
        $("#conText").html("One of them is incompetent, and the other probably let you past to annoy me.");
        $("#hydraM").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 5:
        $("#conText").html("I defeated both of them! Neither let me past!");
        $("#character").css("display", "inline-block");
        $("#hydraM").css("display", "none");
        break;
      case 6:
        $("#conText").html("Fine. Then show me how a tiny penguin like you could defeat me!.");
        $("#hydraM").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 7:
        $("#conText").html("Okay, you asked for it.");
        $("#character").css("display", "inline-block");
        $("#hydraM").css("display", "none");
        $("#pictureHydraIce").css("display","inline");
        $("#pictureHydraHead").css("display","none");
        break;
      case 8:
        $("#conText").html("What! Magic? Why does everyone always have Magic?");
        $("#hydraM").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 9:
        $("#conText").html("");
        $("#hydraM").css("display", "none");
        $("#picturePenguinSwim").css("display","inline");
        $("#pictureHydraIce").css("display","none");
        break;
      case 10:
        $("#conText").html("Wake Up!");
        $("#character").css("display", "inline-block");
        $("#hydraM").css("display", "none");
        $("#pictureHydraFrozen").css("display","inline");
        $("#picturePenguinSwim").css("display","none");
          break;
      case 11:
        $("#conText").html("What?");
        $("#hydraL").css("display", "inline-block");
        $("#character").css("display", "none");
        $("#pictureHydraHead").css("display","inline");
        $("#pictureHydraFrozen").css("display","none");
        break;
      case 12:
        $("#conText").html("I have frozen your other heads. I would greatly appreciate it if you left.");
        $("#character").css("display", "inline-block");
        $("#hydraL").css("display", "none");
        break;
      case 13:
        $("#conText").html("But But Boss! When he wakes up, he will be mad.");
        $("#hydraL").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 14:
        $("#conText").html("Tell him I gave you something magical. He is so scared of magic, he won't bother you.");
        $("#character").css("display", "inline-block");
        $("#hydraL").css("display", "none");
        break;
      case 15:
        $("#conText").html("Thank you so much! I'll leave right away!");
        $("#hydraL").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 16:
        window.location.href = "file:///D:/Nia/Documents/SummerProject2019/Code/5thScreen/5thScreenHTML.html";
          }
  }, 4000);
}
//vertical walls
for (var v = 0; v < 5; v++) { //this loop creates all the vertical walls
  Crafty.e('2D, DOM, Color, Collision, wall')
    .attr({x: v*100, y: 0, w: 5, h: 405})
    .color('#000')
}

//horizontal walls
for (var h = 0; h < 5; h++) { //this loop creates all the horizantal walls
  Crafty.e('2D, DOM, Color, Collision, wall')
    .attr({x: 0, y: h*100, w: 405, h: 5})
    .color('#000')
}
//doors- I can't automatically create these, as they need names (so all the doors appear when you enter a room) and only specific ones can exist
// var vdoor1 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 100, y: 035, w: 5, h: 30})
//   .color('brown')

// var vdoor2 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 100, y: 135, w: 5, h: 30})
//   .color('brown')

var vdoor3 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 100, y: 235, w: 5, h: 30})
  .color('brown')

var vdoor4 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 100, y: 335, w: 5, h: 30})
  .color('brown')

// var vdoor5 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 200, y: 035, w: 5, h: 30})
//   .color('brown')

var vdoor6 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 200, y: 135, w: 5, h: 30})
  .color('brown')

// var vdoor7 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 200, y: 235, w: 5, h: 30})
//   .color('brown')

var vdoor8 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 200, y: 335, w: 5, h: 30})
  .color('brown')

var vdoor9 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 300, y: 035, w: 5, h: 30})
  .color('brown')

var vdoor10 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 300, y: 135, w: 5, h: 30})
  .color('brown')

var vdoor11 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 300, y: 235, w: 5, h: 30})
  .color('brown')

// var vdoor12 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 300, y: 335, w: 5, h: 30})
//   .color('brown')

// var hdoor1 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 035, y: 100, w: 30, h: 5})
//   .color('brown')

var hdoor2 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 135, y: 100, w: 30, h: 5})
  .color('brown')
//
// var hdoor3 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 235, y: 100, w: 30, h: 5})
//   .color('brown')

var hdoor4 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 335, y: 100, w: 30, h: 5})
  .color('brown')

// var hdoor5 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 035, y: 200, w: 30, h: 5})
//   .color('brown')

var hdoor6 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 135, y: 200, w: 30, h: 5})
  .color('brown')

// var hdoor7 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 235, y: 200, w: 30, h: 5})
//   .color('brown')
//
// var hdoor8 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 335, y: 200, w: 30, h: 5})
//   .color('brown')

var hdoor9 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 045, y: 300, w: 30, h: 5})
  .color('brown')

// var hdoor10 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 135, y: 300, w: 30, h: 5})
//   .color('brown')

 var hdoor11 = Crafty.e('2D, DOM, Color, Collision, door')
   .attr({x: 235, y: 300, w: 30, h: 5})
   .color('brown')

 var hdoor12 = Crafty.e('2D, DOM, Color, Collision, door')
   .attr({x: 335, y: 300, w: 30, h: 5})
   .color('brown')

// creating dark rooms
var dark1 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 000, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      this.destroy();
    }
  })
var dark2 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor2.z = 2;
      this.destroy();
    }
  })
var dark3 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      this.destroy();
    }
  })
var dark4 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor9.z = 2;
      hdoor4.z = 2;
      this.destroy();
    }
  })
var dark5 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 000, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      this.destroy();
    }
  })
var dark6 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor2.z = 2;
      hdoor6.z = 2;
      vdoor6.z = 2;
      this.destroy();
    }
  })
var dark7 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor10.z = 2;
      vdoor6.z = 2;
      this.destroy();
    }
  })
var dark8 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor4.z = 2;
      vdoor10.z = 2;
      this.destroy();
    }
  })
var dark9 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 000, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor9.z = 2;
      vdoor3.z = 2;
      this.destroy();
    }
  })
var dark10 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor3.z = 2;
      hdoor6.z = 2;
      this.destroy();
    }
  })
var dark11 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor11.z = 2;
      hdoor11.z = 2;
      this.destroy();
    }
  })
var dark12 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor12.z = 2;
      vdoor11.z = 2;
      this.destroy();
    }
  })
var dark13 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 000, y: 300, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor4.z = 2;
      hdoor9.z = 2;
      this.destroy();
    }
  })
var dark14 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 300, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor4.z = 2;
      vdoor8.z = 2;
      this.destroy();
    }
  })
var dark15 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 300, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor8.z = 2;
      hdoor11.z = 2;
      this.destroy();
    }
  })
var dark16 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 300, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor12.z = 2;
      this.destroy();
    }
  })

//player
var player = Crafty.e("2D, Canvas, Color, Fourway, Collision, player")
.attr({x: 045, y: 335, z: 2, w: 30, h: 30})
.color("black")
.fourway(200)
.bind('Move', function(evt) { // after player moved
  var hitDatas, hitData;
  if ((hitDatas = this.hit('door'))) {
  }
  else if ((hitDatas = this.hit('wall'))) { // check for collision with walls
    hitData = hitDatas[0]; // resolving collision for just one collider
    if (hitData.type === 'SAT') { // works better, but only if you have the collision component
      // move player back by amount of overlap
      this.x -= hitData.overlap * hitData.nx;
      this.y -= hitData.overlap * hitData.ny;
    } else { // backup, in case something goes wrong. It still works, though not as well
      this.x = evt._x;  // move player to previous position
      this.y = evt._y;
    }
  }
});

var hydra = Crafty.e('2D, DOM, Color, Collision')
  .attr({x: 137.5, y: 10, z:-1, w: 25, h: 25})
  .color('green')
  .bind('EnterFrame', function() { // every frame
    var hitDatas, hitData;
    if (hitDatas = this.hit('player')&&hy==false) { // check if player hits
      Crafty.stop()
      console.log("hi");
      hy=true;
      HydraCutscene();
      Crafty.init()
    }
  });
// new Crafty.circle(500, 500, 25)
// .attr({centerX: 500, centerY: 500, radius:25})
// Crafty.e('2D, DOM, Color, Collision, wall')
//   .circle(500, 500, 25)
//   .color('#000')

// window.location.href = "http://www.w3schools.com";
