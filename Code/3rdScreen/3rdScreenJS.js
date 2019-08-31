let hy = false; //keeps track if you have the hydra head
Crafty.init(410,410, document.getElementById('game'));
function HydraCutscene() {
  $(".cutscene").css("display","inline");
  $(".game").css("display","none");
  $("#character").css("display","none");
  $("#pictureHydraIce").css("display","none");
  $("#conText").html("How Did You Get This Far! Oh wait, he probably just let you by. I won't do the same!");
  $("#sound").css("top","800px");
  $("#sound").css("left","300px");
  let conversation = 0;
  setInterval(function(){
    conversation++
    switch (conversation) {
      case 1:
        $("#conText").html("Don't you speak Early Modern English?");
        $("#character").css("display", "inline-block");
        $("#hydraR").css("display", "none");
        break;
      case 2:
        $("#conText").html("No, I only do that to get on Boss's nerves.");
        $("#hydraR").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 3:
        $("#conText").html("Anyway, if you won't let me by, take this!");
        $("#character").css("display", "inline-block");
        $("#hydraR").css("display", "none");
        $("#pictureHydraIce").css("display","inline");
        $("#pictureHydraHead").css("display","none");
        break;
      case 4:
        $("#conText").html("What Is This? It's Freezing My Face!");
        $("#hydraR").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 5:
      $(".game").css("display","block");
      $(".cutscene").css("display","none");
      $("#sound").css("top","10px")
      $("#sound").css("left","35px")
          }
  }, 4000);
}
for (var v = 0; v < 5; v++) { //this loop creates all the vertical walls
  Crafty.e('2D, DOM, Color, Collision, wall')
    .attr({x: v*100, y: 0, w: 5, h: 405})
    .color('#000')
}
for (var h = 0; h < 5; h++) { //this loop creates all the horizantal walls
  Crafty.e('2D, DOM, Color, Collision, wall')
    .attr({x: 0, y: h*100, w: 405, h: 5})
    .color('#000')
}

//doors- I can't automatically create these, as they need names (so all the doors appear when you enter a room) and only specific ones can exist
var vdoor1 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 100, y: 035, w: 5, h: 30})
  .color('brown')

// var vdoor2 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 100, y: 135, w: 5, h: 30})
//   .color('brown')

var vdoor3 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 100, y: 235, w: 5, h: 30})
  .color('brown')

var vdoor4 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 100, y: 335, w: 5, h: 30})
  .color('brown')

var vdoor5 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 200, y: 035, w: 5, h: 30})
  .color('brown')

// var vdoor6 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 200, y: 135, w: 5, h: 30})
//   .color('brown')

var vdoor7 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 200, y: 235, w: 5, h: 30})
  .color('brown')

var vdoor8 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 200, y: 335, w: 5, h: 30})
  .color('brown')

// var vdoor9 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 300, y: 035, w: 5, h: 30})
//   .color('brown')

// var vdoor10 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 300, y: 135, w: 5, h: 30})
//   .color('brown')

var vdoor11 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 300, y: 235, w: 5, h: 30})
  .color('brown')

var vdoor12 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 300, y: 335, w: 5, h: 30})
  .color('brown')

var hdoor1 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 035, y: 100, w: 30, h: 5})
  .color('brown')

// var hdoor2 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 135, y: 100, w: 30, h: 5})
//   .color('brown')
//
// var hdoor3 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 235, y: 100, w: 30, h: 5})
//   .color('brown')

// var hdoor4 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 335, y: 100, w: 30, h: 5})
//   .color('brown')

var hdoor5 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 035, y: 200, w: 30, h: 5})
  .color('brown')

// var hdoor6 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 135, y: 200, w: 30, h: 5})
//   .color('brown')

var hdoor7 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 235, y: 200, w: 30, h: 5})
  .color('brown')

var hdoor8 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 335, y: 200, w: 30, h: 5})
  .color('brown')

// var hdoor9 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 035, y: 300, w: 30, h: 5})
//   .color('brown')

// var hdoor10 = Crafty.e('2D, DOM, Color, Collision, door')
//   .attr({x: 135, y: 300, w: 30, h: 5})
//   .color('brown')

 // var hdoor11 = Crafty.e('2D, DOM, Color, Collision, door')
 //   .attr({x: 235, y: 300, w: 30, h: 5})
 //   .color('brown')

 var hdoor12 = Crafty.e('2D, DOM, Color, Collision, door')
   .attr({x: 335, y: 300, w: 30, h: 5})
   .color('brown')

// creating dark rooms- I have to hard code these as they either need names or individual code so they show the right doors
var dark1 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 000, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor1.z = 2;
      vdoor1.z = 2;
      this.destroy();
    }
  })
var dark2 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor1.z = 2;
      vdoor5.z = 2;
      this.destroy();
    }
  })
var dark3 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor5.z = 2;
      this.destroy();
    }
  })
var dark4 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      this.destroy();
    }
  })
var dark5 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 000, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor1.z = 2;
      hdoor5.z = 2;
      this.destroy();
    }
  })
var dark6 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      this.destroy();
    }
  })
var dark7 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor7.z = 2;
      this.destroy();
    }
  })
var dark8 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor8.z = 2;
      this.destroy();
    }
  })
var dark9 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 000, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor5.z = 2;
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
      vdoor7.z = 2;
      this.destroy();
    }
  })
var dark11 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor7.z = 2;
      vdoor11.z = 2;
      hdoor7.z = 2;
      this.destroy();
    }
  })
var dark12 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor8.z = 2;
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
      vdoor12.z = 2;
      this.destroy();
    }
  })
var dark16 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 300, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor12.z = 2;
      hdoor12.z = 2;
      this.destroy();
    }
  })

//player
var player = Crafty.e("2D, Canvas, Color, Fourway, Collision, player")
.attr({x: 335, y: 135, z: 2, w: 30, h: 30})
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
  .attr({x: 237.5, y: 10, z:-1, w: 25, h: 25})
  .color('green')
  .bind('EnterFrame', function() { // every frame
    var hitDatas, hitData;
    if ((hitDatas = this.hit('player'))&&hy==false) { // check if player hits, but has not already hit
      Crafty.stop()
      console.log("hi");
      hy=true;
      HydraCutscene();
      Crafty.init()
    }
  });

var stairs = Crafty.e('2D, DOM, Color, Collision')
  .attr({x: 37.5, y: 310, z:-1, w: 25, h: 25 })
  .color('grey')
  .bind('EnterFrame', function() { // every frame
    var hitDatas, hitData;
    if ((hitDatas = this.hit('player'))&&hy==true) { // check if player hits and has hydra head
      window.location.href = "..4thScreen/4thScreenHTML.html";
    }
  });

// new Crafty.circle(500, 500, 25)
// .attr({centerX: 500, centerY: 500, radius:25})
// Crafty.e('2D, DOM, Color, Collision, wall')
//   .circle(500, 500, 25)
//   .color('#000')


// window.location.href = "http://www.w3schools.com";
